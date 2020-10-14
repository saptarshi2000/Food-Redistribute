
const mongoose = require('mongoose')

const tokenSchema = new mongoose.Schema({
    usertoken:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true,
        default:Date.now()
    }
})

module.exports = mongoose.model("blacklisted",tokenSchema)