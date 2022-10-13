const express = require('express')
const router = express.Router()
const authRoutes = require('./authRoutes')
router.get("/" , (req , res) => {
    res.send("This api is reserved for testing Data Visulization in MERN stack")
})

router.use('/auth' , authRoutes)

module.exports = router