require('dotenv').config()
const mongoose = require('mongoose')


const MONGOURI = process.env.DATABASE_URL || "mongodb://localhost/fooddbjs"

const InitiateDb = async () => {
    try{
        await mongoose.connect(MONGOURI,{
            useUnifiedTopology : true,
            useNewUrlParser:true,
            useCreateIndex:true,
            useFindAndModify:false
        })
        console.log('database connected')
    }catch(e){
        console.log(e)
    }
}

module.exports = InitiateDb