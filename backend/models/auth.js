const mongoose = require('mongoose')

const authSchema = mongoose.Schema({
    _id:{
        type:mongoose.Types.ObjectId,
        ref:'counters'
    },
    member_account:{
        type:String,
        trim:true,
        required:true
    },
    member_password:{
        type:String,
        trim:true,
        required:true
    },
    member_gender:{
        type:String,
        trim:true,
        required:true
    },
    member_birthdate:{
        type:String,
        trim:true,
        required:true
    },
},{_id:false})
module.exports = mongoose.model('auths', authSchema)