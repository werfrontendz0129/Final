const express = require('express')
const router = express.Router()
const course = require('../models/courses')
const members = require('../models/members')


//所有課程
router.get('/', async (req,res) =>{
    const courses = await course.find()
    res.json(courses)
})


//課程類別
router.get('/type/:type?', async (req,res) =>{
    console.log(req.params.type)
    const course_type = await course.find({type: req.params.type})
    res.json(course_type)
})

//本月開課
router.get('/month', async(req, res) => {
    const month = '0' + (new Date().getMonth()+1)
    const next_month = '0'+(String(Number(month)+1))
    const course_month = await course.find({date : {$regex: '2021-' + month }, date: {$regex: '2021-' + next_month}})
    // const course_month = await course.find({date : {$regex: '2021-' + month }, date: {$regex: '2021-' + next_month}})
    console.log(course_month)
    res.json(course_month)
})

//關鍵字+類別
router.get('/keyword/:keyword/:type', async (req,res) =>{
    console.log('關鍵字搜尋','keyword:' + req.params.keyword, 'type:' + req.params.type)
    const keyword_data = await course.find({name: {$regex: req.params.keyword}, type: {$regex: req.params.type}})
    res.json(keyword_data)
})

//全部課程關鍵字搜尋
router.get('/keywordfor/:keyword', async(req, res) => {
    console.log('全資料關鍵字搜尋', 'keyword:' + req.params.keyword)
    const keyword = await course.find({name: {$regex: req.params.keyword}})
    res.json(keyword)
})


//每筆課程ID
router.get('/:id?/:member_id?', async(req,res) => {
    console.log('課程ID為:' + req.params.id)
    console.log('會員id為:' + req.params.member_id)
    let item = await course.findById({_id: req.params.id})
    const member_id = req.params.member_id
   // 有登入的話，會有會員ID進來
    if(member_id) {
        const member = await members.findById({_id: member_id})
        const course_id = req.params.id
        let course_booking = member.course_booking //把欄位存起來
        let member_course_booking = course_booking.find(obj => obj.course_id == course_id)
        let new_course = JSON.parse(JSON.stringify(item)) //copy
        new_course.member_course_booking = (member_course_booking ? true : false)
        item = new_course
    }
    res.json(item)
})


//加入預約課程
router.patch('/booking/:id', async(req,res) =>{
    const member = await members.findById({_id: 1});
    const course_id = req.params.id;
    await course.updateOne({_id: req.params.id},{ $inc: {people: -1}})
    let course_booking = member.course_booking;
    let exist = course_booking.findIndex(obj => obj.course_id == course_id);
    if(exist < 0) { // not found 
        member.course_booking.push({
            course_id: parseInt(course_id)
        })
    }
    else {
        member.course_booking.splice(exist, 1)
    }
    const newMember = new members(member);
    const saveMember = await newMember.save();
    res.send(saveMember)
})

//其他推薦課程(新增)
router.get('/recommend/:id?/:type?', async(req, res) => {
    console.log(req.params.type)
    console.log(req.params.id)
    // const courses = await course.find()
    // const courses = await course.find({  _id : {$ne: req.params.id}})
    const courses = await course.find({ type :{$eq: req.params.type}, _id : {$ne: req.params.id}}).limit(5)
    // const courses = await course.find({ type :{$ne: req.params.type}})
    res.json(courses)
})


module.exports = router;