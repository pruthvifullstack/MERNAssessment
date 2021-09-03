
const express = require('express')
const router = express.Router()

// const Products = require('../DataFile/ProductList')

const Products = [{
    id:1,
    title:"Prod1",
    description:"Prod1 Description"
},
{
    id:2,
    title:"Prod2",
    description:"Prod2 Description"
},
{
    id:3,
    title:"Prod3",
    description:"Prod3 Description"
},
{
    id:4,
    title:"Prod4",
    description:"Prod4 Description"
}
]


//GET method - retrives all data
router.get("/",(req,res)=>{
    res.json({Products:Products})
    })


//GET method - retrieves only one item
router.get("/id",(req,res)=>{
    res.json({Products:Products.id})
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


//GET method - retrieves only one item
// router.get("/i1",(req,res)=>{
//     try{
//         Product.findById(req.params.id)
//     .then((product) => res.json(product))
//     }catch(err){
//      res.status(400).json("Error: " + err)
//     }
// })