const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)
const bcrypt = require('bcryptjs')

const memberSchema = new mongoose.Schema({
    _id:Number,
    member_account:{
        type:String,
        trim:true,
        required:true
    },
    member_name:{
        type:String,
        trim:true,
        required:false
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
    member_phone:{
        type:String,
        trim:true,
        required:false
    },
    member_birthdate:{
        type:String,
        trim:true,
        required:true
    },
    member_address:{
        type:String,
        trim:true,
        required:false
    },
    member_avatar:{
        type:String,
        trim:true,
        required:false
    },
    order_address:{
        type:[Object],
        trim:true,
        required:false
    },
    member_creditcard:{
        type:[Object],
        trim:true,
        required:false
    },
    collections:{
        type:[Object],
        trim:true,
        required:false
    },
    user_rental:{
        type:[Object],
        trim:true,
        required:false
    },
    user_purchase:{
        type:[Object],
        trim:true,
        required:false
    },
    course_booking:{
        type:[Object],
        trim:true,
        required:false
    },
    notifications_account:{
        type:[Object],
        trim:true,
        required:false
    },
    notifications_orders:{
        type:[Object],
        trim:true,
        required:false
    },
    notifications_lesson:{
        type:[Object],
        trim:true,
        required:false
    }, 
},{_id:false})
memberSchema.plugin(AutoIncrement)

memberSchema.pre('save', async function(next){
    try{
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.genSalt(this.password,salt)
        this.password = hash
    }catch(err){
        next()
    }
})



module.exports = mongoose.model('members', memberSchema)