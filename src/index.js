const express =  require('express')
const bodyparser = require('body-parser')
const cors = require('cors')

const InitiateDb = require('./config/db')
const userroutes = require('./routes/userrouters')

const PORT = 3030

var app = express()
InitiateDb()

app.use(bodyparser.json())
app.use(cors())
app.use('/images',express.static('uploads'))

app.use('/userroutes',userroutes)

app.listen(PORT,(req,res)=>{
    console.log(`server started at port ${PORT}`)
})
//this is test for


// for test
