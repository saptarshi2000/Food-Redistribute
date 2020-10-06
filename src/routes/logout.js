const express = require('express')
<<<<<<< HEAD


const router = express.Router()

router.put('/',(req,res)=>{
    res.send("done1")
})

module.exports = router
=======
const router  = express.Router()
const validate = require('./validate')

router.post('/',validate,(req,res)=>{
    res.send('hello')
})
module.exports = router
>>>>>>> fd89c5c1b4eb3c1c91b562d8f0bc28c67138d5cb
