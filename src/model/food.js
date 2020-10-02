const mongoose = require('mongoose')

const foodschema = mongoose.Schema({
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
    posted_by:{
        type:String,
        require:true
    },
    max_people:{
        type:Number,
        require:true
    }
})

module.exports = mongoose.model("foods",foodschema)