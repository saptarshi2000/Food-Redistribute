const express = require('express')
const bcryptjs = require('bcryptjs')

const member = require('../model/member')

const router = express.Router()

router.post('/',async(req,res)=>{
    const chkmember = await member.findOne(req.body.email)
    if(chkmember){
        return res.status(412).send()
    }
    try{
        const salt = await bcryptjs.genSalt()
        const hashedpassword = await bcryptjs.hash(req.body.password,salt)
        var newmember = new member({
            email:req.body.email,
            username:req.body.username,
            password:hashedpassword,
            ac_type:req.body.ac_type,
        })
        await newmember.save().then(()=>{
            res.status(201).send()
        })
    }catch(e){
        res.status(500).send()
    }
})

module.exports = router