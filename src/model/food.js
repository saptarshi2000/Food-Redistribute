const mongoose = require('mongoose')
const { Schema } = mongoose
const foodschema = new Schema({
    items:{
        type:String,
        required:true
    },
    food_type:{
        type:String,
        required:true
    },
    posted_at:{
        type:Date,
        required:true,
        default:Date.now()        
    },
    expirationDate: {
        type: Date,
        expires: 0
    },
    posted_by:{
        type:String,
        required:true
    },
    max_people:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pin:{
        type:String,
        
    },
    imageUrl: {
        type: String,
        required: true
    },
    claimed:{
        type:Boolean,
        required:true,
        default:false
    },
    claimed_by:{
        type:mongoose.Types.ObjectId,
        ref:'members'
    },
    phone:{
        type:String,
    },
    address:{
        type:String,
    }
})

module.exports = mongoose.model("foods",foodschema)