const app = require('./app')
// const port = process.env.PORT || 8081
const express = require('express')
const path = require('path')
const cors = require('cors')

const allowlist = ['http://localhost', 'http://127.0.0.1']
const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

app.use(cors())

// Serve only the static files form the build directory
// app.use(express.static(__dirname + '/build'));

// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname + '/build/index.html'));
// });


// app.listen(port, function (err) {
//   if (err) {
//     throw err
//   }

//   console.log(`server is listening on ${port}...`)
// })
