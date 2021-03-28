const passport = require('passport')
const {Schema, model, Types} = require('mongoose')

const schema = new Schema ({
  email: {type: String, require: true, unique: true},
  password: {type: String, required: true}
// const {Schema, model, ObjectId} = require('mongoose')
// links: [{type: Types.ObjectId, ref: 'Link'}]
  
})

// function initUser (app) {
//   // app.get('/', renderWelcome)
//   app.get('/profile', passport.authenticationMiddleware(), renderProfile)
//   app.post('/auth', passport.authenticate('local', {
//     successRedirect: '/profile',
//     failureRedirect: '/'
//   }))
// }

// function renderWelcome (req, res) {
//   res.render('user/welcome')
// }

// function renderProfile (req, res) {
//   res.render('user/profile', {
//     username: req.user.username
//   })
// }

module.exports = model('User', schema)
// module.exports = model(name: 'User', schema)