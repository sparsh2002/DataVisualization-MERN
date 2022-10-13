const express = require('express')
const router = express.Router()
const { singupPost , loginPost , logoutGet} = require('../controllers/authController');

// console.log(singupPost)

router.post('/signup', singupPost);
router.post('/login', loginPost);
router.get('/logout' , logoutGet)
module.exports = router;