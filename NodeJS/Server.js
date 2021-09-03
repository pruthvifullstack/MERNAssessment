//server files needs express and mongoose to connect to database
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const config = require('config')

const products = require('./Routes/ProductRoute')
app.use(express.json())
app.use(cors())

const db = config.get('db.url');

// mongoose.connect(db,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(()=>console.log("Mongo Connected!!!!"))
// .catch((err)=>console.log(err))
app.use('/app/products', products)

const port = 5000
app.listen(port,()=>console.log(`Listning at Port ${port}`))