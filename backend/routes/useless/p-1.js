const express = require('express')
const router = express.Router()
const product = require('../models/product')


//query all product 
router.get('/', async (req,res) =>{
    const products = await product.find()
    res.json(products)
})

//Create new product
router.post('/add', async(req,res) => {
    if(!req.body){
        return res.status(400).send({
            ErrMsg:"All field can't be empty!"
        })
    }
    const newproduct = new product({
        _id:req.body._id,
        prod_name:req.body.prod_name,
        prod_category:req.body.prod_category,
        occation_category:req.body.occation_category,
        order_method:req.body.order_method,
        prod_price:req.body.prod_price,
        buffer_time:req.body.buffer_time,
        shipping_method:req.body.shipping_method,
        prod_img:req.body.prod_img,
        prod_info:req.body.prod_info,
        prod_detail:req.body.prod_detail,
        stock:req.body.stock,
    });
    // const savedproduct = await newproduct.save();
    // res.json(savedproduct)
    newproduct
    .save()
    .then(res.send('Your data is sent.'))
    .catch((err)=>{
        res.status(500).json({
            ErrMsg:err.message || "Please check your data"
        })
    })
})

//search specific item
router.get('/get/:id', async(req,res) => {
    const prod = await product.findById({prod_id: req.params.prod_name})
    res.json(prod);
})

//delete specific item
router.delete('/detele/:id', async(req,res) =>{
    const result = await product.findByIdAndDelete({prod_id:req.params.prod_id})
    res.json(result)
})

//update a specific item
router.patch('/update/:id', async(req,res) =>{
    const pro = await product.updateOne({_id: req.params.id},{$set: req.body})
    res.json(pro)
})

//mongodb find() multi condition
// ?field1=value1&field2=value2&field3=value3
//

module.exports = router;