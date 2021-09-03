
const express = require('express')
const router = express.Router()

let Products = [{
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
    res.send({Products:Products})
    })


//GET method - retrieves only one item
router.get("/:id",(req,res)=>{
    const id = req.params.id
    for(let product of Products){
        if(product.id == id){
            res.json(product)
            return
        }
    }
    res.send("Record not found")
    })


//POST method - Adds item to DB
router.post("/",  (req,res) =>{
   const product = req.body
   console.log(product)
   Products.push(product)
   res.send("posted successfully")
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