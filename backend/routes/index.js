const express = require('express')
const router = express.Router()

router.get("/" , (req , res) => {
    res.send("This api is reserved for testing Data Visulization in MERN stack")
})

module.exports = router