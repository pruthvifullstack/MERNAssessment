
const express = require('express')
const router = express.Router()

const Product = require('../Models/ProductModel')

//GET method - retrives all data
router.get("/",(req,res)=>{
    try{
        Product.find()
        .then((products)=>res.json(products))
    }catch(err){
        res.status(500).json({error:err.message})
    }
})

//GET method - retrieves only one item
router.get("/:id",(req,res)=>{
    try{
        Product.findById(req.params.id)
    .then((product) => res.json(product))
    }catch(err){
     res.status(400).json("Error: " + err)
    }
})

//POST method - Adds item to DB
router.post("/", async (req,res) =>{
    try
    {
        let{id,title,description} = req.body
        const newProduct = new Product({
            id,
            title,
            description
        })
        const saveProduct = await newProduct.save()
        res.json(saveProduct)
    }catch(err){
        res.status(500).json({error:err.message})
    }
})

//PUT Method - Update item
router.put("/:id",(req,res)=>{
    Product.findById({_id:req.params.id})
    .then((product)=>{
        product.id = req.body.id,
        product.name = req.body.title,
        product.description = req.body.description
        
        product.save()
        .then(()=>res.json("Product Updated"))
        .catch((err)=>res.status(400).json("Error: "+err))
    })
    .catch((err) => res.status(400).json("Error " + err));
})

//DELETE method - delets itesm
router.delete("/:id",(req,res)=>{
    try{
        Product.findById(req.params.id)
        .then((product)=>product.remove()
        .then(()=>res.json(product)))
    }catch(err){
        res.json(err)
    }
})

module.exports = router