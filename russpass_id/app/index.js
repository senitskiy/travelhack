const path = require('path')

const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const passport = require('passport')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const mongoose = require('mongoose')
const cors = require('cors')
const config = require('../config')
const { start } = require('repl')
const mongoURI = 'mongodb+srv://admin:admin@cluster0.z4ifn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express()

app.use(cors())

app.use('/api/auth', require('./routes/auth.routes.js'))

async function start1() {
  try {
    await mongoose.connect(mongoURI,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true            
    });
  } catch (e) {
    console.log('Server error', e.message)
    process.exit(1);
  }
}

start1()
// if (process.env.NODE_ENV !== 'production') {
  


  // app.use(
  //   cors(
  //     {
  //       "origin": "*",
  //       "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  //       "preflightContinue": false,
  //       "optionsSuccessStatus": 204
  //     }
  //   )
  //   // function (req, res, next) {
  //   // // Website you wish to allow to connect
  //   // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3006');
  //   // // Request methods you wish to allow
  //   // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  //   // // Request headers you wish to allow
  //   // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  //   // // Set to true if you need the website to include cookies in the requests sent
  //   // // to the API (e.g. in case you use sessions)
  //   // res.setHeader('Access-Control-Allow-Credentials', true);
  //   // // Pass to next layer of middleware
  //   // next();
  //   // }
  // );
// }

app.use(bodyParser.urlencoded({
  extended: false
}))

require('./authentication').init(app)

// app.use(session(
//   {
//   store: new RedisStore({
//     url: config.redisStore.url
//   }),
//   secret: config.redisStore.secret,
//   resave: false,
//   saveUninitialized: false
// }
// ))

app.use(passport.initialize())
app.use(passport.session())

app.engine('.hbs', exphbs({
  defaultLayout: 'layout',
  extname: '.hbs',
  layoutsDir: path.join(__dirname),
  partialsDir: path.join(__dirname)
}))

app.set('view engine', '.hbs')
app.set('views', path.join(__dirname))

require('./user').init(app)
require('./note').init(app)


module.exports = app
