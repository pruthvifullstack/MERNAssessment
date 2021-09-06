
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
    // const id = req.params.id
    // for(let product of Products){
    //     if(product.id == id){
    //         res.json(product)
    //         return
    //     }
    // }
    const product = Products.find(c=>c.id === parseInt(req.params.id))
    res.json(product)
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
 const product = Products.find(c=>c.id === parseInt(req.params.id))

 if (product) {
    const updateProduct = {
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
    };     
    let target = Products.indexOf(product);
    Products.splice(target, 1, updateProduct);
    res.json("Product Updated Successfully!!");
}
else {
    res.status(500).json('Data not found !!.');
}
})

//DELETE method - delets itesm
router.delete("/:id",(req,res)=>{
  const id = req.params.id
  Products = Products.filter(product =>{
      if(product.id !== id){
          return true
      }
      return false
  })
  res.send("Movie Deleted")
})

module.exports = router


