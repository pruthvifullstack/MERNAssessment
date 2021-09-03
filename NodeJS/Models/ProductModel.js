const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    }
})
module.exports = Product = mongoose.model("product", ProductSchema)