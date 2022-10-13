const express = require('express')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
require("dotenv").config();
const app = express()
const PORT = process.env.PORT

const db = require('./db.js')

db.connect()
// const router = require('./routes/index');

// middle ware
app.use(bodyParser.json({limit:"50mb"}))
app.use(bodyParser.urlencoded({extended:true, limit:"50mb"}))

// cors
// var corsOptions = {
//   // origin: 'http://localhost:8080',
//   // optionsSuccessStatus: 200 // For legacy browser support
//   methods: "GET, PUT , POST, DELETE"
// }

app.use(cors())


// cookies
app.use(cookieParser());


// app.use((req, res , next) =>{
//     req.header("Access-Control-Allow-Origin" , "*")
//     req.header("Access-Control-Allow-Headers" , "*")
//     res.header("Access-Control-Allow-Origin" , "*")
//     res.header("Access-Control-Allow-Headers" , "*")
//     next()
// })

// app.use("/api/v1" , router)

// // firebase
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://fir-project-1-58a04.firebaseio.com"
// });

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})