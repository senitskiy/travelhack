const {Router} = require('express')
const router = Router()
const User = require('../user/user.js')
const bcryptr = require('bcryptjs')
const jwt = require('jsonwebtoken')
const jwtSecret = 'Boots of Travel'; 
const {check, validationResult} = require('express-validator')
// /api/auth/register

router.post(
  '/register',
  // [
  //   check('email','некоректный email').isEmail(),
  //   check('password','Минимальная длина пароля 6 символов')
  //     .isLength( { min: 6 })
  // ], 
  async (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Некорректные данные при регистрации'
      })
    }

    const {email, password} = req.body
    console.log(email + " " + password)
    const candidate = await User.findOne({email})

    if (candidate) {
      return res.status(400).json({message: 'Пользователь уже существует.'})
    }

    const hashedPassword = await bcryptr.hash(password, 12)
    const user = new User({email, password: hashedPassword})

    await user.save()

    res.status(201).json({ message: 'Пользователь создан.'})
    console.log(email + " " + password)
  } catch (e) {
    res.status(500).json({message: 'Oшибка ' + req})
  }
})

router.post(
  '/login', 
  [
    check('email', 'Введите корректный email').normalizeEmail().isEmail(),
    check('password', 'Введите пароль').exists()
  ],
  async (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Некорректные данные при входе в систему'
      })
    }    

    const {email, password} = req.body

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({ message: 'Пользователь не найден' })
    }

    const isMatch = await bcryptr.compare(password, user.password)

    if (!isMatch) {
      return res.status(400).json({ message: 'Неверный пароль, попробуйте снова' }) 
    }

    const token = jwt.sign(
      { userId: user.id },
      jwtSecret,
      { expiresIn: '1h' }
    )

    res.json({ token, userId: user.id })

  } catch (e) {
    console.log(req)
    res.status(500).json({message: 'Oшибка'}); 
  }
})

module.exports = router