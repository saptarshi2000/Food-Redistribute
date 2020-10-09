const mongoose = require('mongoose')
const memberSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    username: {
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    ac_type :{
        type:String,
        require:true
    },
    organization_name:{
        type:String
    },
    organization_id:{
        type:String
    },
    created_at:{
        type:Date,
        require:true,
        default:Date.now()
    },
    active:{
        type:Boolean,
        require:true,
        default:true
    },
    verified:{
        type:Boolean,
        require:true,
        default:false
    }
})

module.exports = mongoose.model("members",memberSchema)