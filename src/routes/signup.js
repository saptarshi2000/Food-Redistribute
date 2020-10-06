const express = require('express')
const bcryptjs = require('bcryptjs')

const member = require('../model/member')

const router = express.Router()

router.post('/',async(req,res)=>{
    const {name,email,password} = req.body
    if(!email || !password || !name){
        return res.status(422).json({error:"please add all the fields"})
    }
    const chkmember = await member.findOne({email})
    if(chkmember){
        return res.status(422).json({error:"useralready_exist"})
    }
    try{
        const salt = await bcryptjs.genSalt()
        const hashedpassword = await bcryptjs.hash(req.body.password,salt)
        var newmember = new member({
            email:req.body.email,
            username:req.body.username,
            password:hashedpassword,
            ac_type:req.body.ac_type|| "",
            organization_name:req.body.organization_name || "",
            organization_id:req.body.organization_id || ""
        })
        await newmember.save().then(()=>{
            res.status(201).json({message:"saved successfully"})
        })

        
    }catch(err){
        console.log(err)
    }

})

module.exports = router