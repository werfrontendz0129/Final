const mongoose = require('mongoose')

const coursesSchema = new mongoose.Schema({
    _id:{type:Number},
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    banner:{
        type:String,
        required:true
    },
    info_text:{
        type:String,
        required:true
    },
    learn_text:{
        type:[String],
        required:true
    },
    work_img:{
        type:String,
        required:true
    },
    work_text:{
        type:[String],
        required:true
    },
    hours:{
        type: String,
        required:true
    },
    teacher:{
        type: String,
        required:true
    },
    people:{
        type:Number,
        min: 0,
        required:true
    },
    demo_img1:{
        type:String,
        required:true
    },
    demo_img2:{
        type:String
    },
},{_id:false})
module.exports = mongoose.model('courses', coursesSchema)