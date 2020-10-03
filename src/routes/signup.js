const express = require('express')
const bcryptjs = require('bcryptjs')

const member = require('../model/member')

const router = express.Router()

router.post('/',async(req,res)=>{
    var email = req.body.email
    const chkmember = await member.findOne({email})
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
            organization_name:req.body.organization_name || "",
            organization_id:req.body.organization_id || ""
        })
        await newmember.save().then(()=>{
            res.status(201).json({})
        })
    }catch(e){
        res.status(500).json({})
    }
})

module.exports = router