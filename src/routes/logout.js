const express = require('express')
const router  = express.Router()
const validate = require('./validate')

router.post('/',validate,(req,res)=>{
    res.send('hello')
})
module.exports = router
