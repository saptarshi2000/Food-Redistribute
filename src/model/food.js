const mongoose = require('mongoose')
const { Schema } = mongoose
const foodschema = new Schema({
    title:{
        type:String,
        require: true
    },
    items:{
        type:String,
        require:true
    },
    food_type:{
        type:String,
        require:true
    },
    posted_at:{
        type:Date,
        require:true,
        default:Date.now()        
    },
    expirationDate: {
        type: Date,
        expires: 0
    },
    posted_by:{
        type:String,
        require:true
    },
    max_people:{
        type:Number,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    pin:{
        type:String,
        require:true
    },
    imageUrl: {
        type: String,
        require: true,
    }
})

module.exports = mongoose.model("foods",foodschema)