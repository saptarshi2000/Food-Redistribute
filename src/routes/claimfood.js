const { compareSync } = require('bcryptjs')
const { Router } = require('express')
const express = require('express')


const router = express.Router()

router.put('/',(req,res)=>{
    res.send("done")
})

module.exports = router