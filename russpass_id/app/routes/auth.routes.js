const {Router} = require('express')
const router = Router()

// /api/auth/register

router.post('/register', async (req, res) => {
  try {
    const {email, password} = req.body
  } catch (e) {
    res.status(500).json({message: 'Oшибка'});
  }
})

router.post('/login', async (req, res) => {
  try {
    
  } catch (e) {
    res.status(500).json({message: 'Oшибка'}); 
  }
})

module.exports = router