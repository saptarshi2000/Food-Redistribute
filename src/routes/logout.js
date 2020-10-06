const express = require('express')


const router = express.Router()

router.put('/',(req,res)=>{
    res.send("done1")
})

module.exports = router
