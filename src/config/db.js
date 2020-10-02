const mongoose = require('mongoose')

const MONGOURI = "mongodb://localhost/fooddbjs"

const InitiatDb = async () => {
    try{
        await mongoose.connect(MONGOURI,{
            useUnifiedTopology : true,
            useNewUrlParser:true,
            useCreateIndex:true
        })
        console.log('database connected')
    }catch(e){
        console.log(e)
    }
}

module.exports = InitiatDb