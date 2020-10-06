const express = require('express')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User  = require('../model/member')

const router  = express.Router()

router.post('/',(req,res)=>{
    const {email,password}=req.body
    if(!email || !password){
        res.status(422).json({error:"please add email or password"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            return res.status(422).json({error:"Invalid Email or Password"})
        }
        bcryptjs.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                //res.json({message:"successfully signed in"})
                const token = jwt.sign({_id:savedUser._id},"abcd",{expiresIn:'1d'})
                const {_id,name,email} = savedUser
                res.json({token:token,message:"ok",user:{_id,name,email}})
            }
            else{
                return res.status(422).json({error:"Invalid Email or Password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})


module.exports = router