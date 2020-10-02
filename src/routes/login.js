const express = require('express')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const MemberTable  = require('../model/member')

const router  = express.Router()

router.post('/',async(req,res) => {
    if(req.body.token != null){
        try{
            jwt.verify(req.body.token,"720f8f9f54ec6119666227a9bad67db50d297740",(err,user)=>{
                if (err) return res.status(401).send()
                return res.status(200).send()
            })
        }catch(e){
            res.status(500).send()
        }
    }else{
        const email = req.body.email
        const password = req.body.password
        const member = await MemberTable.findOne({email:email})
        if(!member){
            return res.status(404).json({})
        }
        try{
            if(await bcryptjs.compare(password,member.password)){
                const payload = {
                    _id:member._id,
                    email:email
                }
                const token = jwt.sign(payload,"720f8f9f54ec6119666227a9bad67db50d297740",{expiresIn:'1h'})

                res.status(200).json({"token":token})
            }else{
                res.status(400).json({})
            }
        }catch(e){
            res.status(500).json({})
        }
    }
})


module.exports = router