const {query} = require('express')
const express = require('express')
const router = express.Router()
const orderList = require('../models/orderLists')

// query all product
router.get('/', async(req,res) => {
    const orders = await orderList.find()
    res.json(orders)
})
// Get Single order
 router.get('/:id?', async(req,res)=> {
     const order_view = await orderList.findById({_id:req.params.id})
     res.json(order_view);
 })
 // Delete order
 router.delete('/deleteAddress/:index', async(req,res)=> {
    const index = req.params.index
    console.log(index)
    const order_obj = await orderList.findById({_id: 1})
    order_obj.order_address.splice(index, 1)
    const order_delete = new orderList(order_obj)
    const savedorder = await order_delete.save()
    res.json(savedorder);
})

router.delete('/deleteCard/:index', async(req,res)=> {
   
    const index = req.params.index
     console.log("gg",index)
    const order_obj = await orderList.findById({_id: 1})
    order_obj.member_creditcard.splice(index, 1)
    const order_delete = new orderList(order_obj)
    const savedorder = await order_delete.save()
    res.json(savedorder);
})

// CREATE order
router.post('/create', async(req,res)=> {
    console.log(req.body)
    const order_obj = await orderList.findById({_id: 1})
    order_obj.order_address.push(req.body)
    const order_create = new orderList(order_obj)
    const savedorder = await order_create.save()
    res.json(savedorder);
})

router.post('/createCard', async(req,res)=> {
    console.log(req.body)
    const order_obj = await orderList.findById({_id: 1})
    order_obj.member_creditcard.push(req.body)
    const order_create = new orderList(order_obj)
    const savedorder = await order_create.save()
    res.json(savedorder);
})

router.post('/create/fullover', async(req,res)=> {
    console.log(req.body)
    const order_obj = await orderList.findById({_id: 1})
    order_obj.user_rental.push(req.body)
    const order_create = new orderList(order_obj)
    const savedorder = await order_create.save()
    res.json(savedorder);
})
 
// Update all orders
router.put('/updateAddress/:index', async(req,res)=> {
    const index = req.params.index
    const order_update = await orderList.findById({_id:1})
    order_update.order_address[index] = req.body
    const order_create = new orderList(order_update)
    const savedorder = await order_create.save()
    res.json(savedorder);
    console.log('order updated successfully !')
})

//update a specific item
// router.patch('/update/:id', async(req,res) =>{
//     const pro = await product.updateOne({_id: req.params.id},{$set: req.body})
//     res.json(pro)
// })
 
module.exports = router;
