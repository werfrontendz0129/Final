const { query } = require('express')
const express = require('express')
// const router = require('express').Router()
const router = express.Router()
const member = require('../models/members')


//query all member 
router.get('/', async (req,res) =>{
    const members = await member.find()
    res.json(members)
})
//Create new member
router.post('/add', async(req,res) => {
    const newmember = new member(req.body);
    const savedmember = await newmember.save();
    res.json(savedmember)
})

//search specific item
router.get('/get/:id', async(req,res) => {
    const user = await member.findById({_id: req.params.id})
    res.json(user);
})

router.get('/:id/:course_id', async(req,res) => {
    console.log('會員ID:' + req.params.id)
    console.log('課程ID:' + req.params.course_booking)
    // const user = await member.findById({_id: req.params.id})
    const Course = await member.find({"_id": req.params.id})
    res.json(Course);
    
    //{course_booking: {$in: Number(req.params.course_id) }}
    // const keyword_data = await course.find({name: {$regex: req.params.keyword}, type: {$regex: req.params.type}})
    
})


//delete specific item
router.delete('/detele/:id', async(req,res) =>{
    const result = await member.findByIdAndDelete({_id:req.params.id})
    res.json(result)
})

//update a specific item
router.put('/update/:id', async(req,res) =>{
    // console.log(req.body)
    const memb = await member.updateOne({_id: req.params.id},{$set: req.body})
    res.json(memb)
})

//delete specific item
router.delete('/deleteNotifications/:index/:member_id', async(req,res) =>{
    let user = await member.findById({_id: parseInt(req.params.member_id)})
    // console.log(req.params.index)
    user.notifications_account.splice(req.params.index, 1)
    // console.log(user)
    const newmember = new member(user);
    const savedmember = await newmember.save();
    res.json(savedmember)
})

router.delete('/deleteCollections/:index/:member_id', async(req,res) =>{
    let user = await member.findById({_id: req.params.member_id})
    // console.log(req.params.index)
    user.collections.splice(req.params.index, 1)
    // res.send(req.params.index)
    const newmember = new member(user);
    const savedmember = await newmember.save();
    res.json(savedmember)
})

router.delete('/deleteCourse/:index/:member_id', async(req,res) =>{
    let user = await member.findById({_id: req.params.member_id})
    // console.log(req.params.index)
    user.course_booking.splice(req.params.index, 1)
    // res.send(req.params.index)
    const newmember = new member(user);
    const savedmember = await newmember.save();
    res.json(savedmember)
})

// mongodb find() multi condition
// ?field1=value1&field2=value2&field3=value3


module.exports = router;