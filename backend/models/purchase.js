const mongoose = require('mongoose')

const purchaseSchema = new mongoose.Schema({
    _id:Number,
    prod_name:{
        type:String,
        required:true
    },
    prod_category:{
        type:String,
        required:true
    },
    occation_category:{
        type:[String],
        required:true
    },
    prod_price:{
        type:String,
        required:true
    },
    prod_info:{
        type:String,
        required:true
    },
},{_id:false})
module.exports = mongoose.model('purchase', purchaseSchema)