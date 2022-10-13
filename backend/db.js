const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const URI = process.env.MONGO_URI
const PROPS = process.env.PROPS
const DB_NAME = process.env.DB_NAME
module.exports.connect = () =>{
    mongoose.connect(URI+DB_NAME+PROPS , {
        useNewUrlParser :true,
        useUnifiedTopology :true,
    }).then(()=>{
        console.log('MongoDB connected successfully!')
    }).catch((error)=>{
        console.log("Error: " , error)
    })

}