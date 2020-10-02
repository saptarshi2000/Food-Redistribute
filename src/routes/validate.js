const express = require('express')
const jwt = require('jsonwebtoken')

const router  = express.Router()

router.use('/',(req,res,next)=>{
    if(req.body.token != null){
        try{
            jwt.verify(req.body.token,"private-key",(err,decoded)=>{
                if(err) return res.send(401).json({})
                req.decoded = decoded
                next()
            })
        }catch(err){
            res.status(500).json({})
        }
    }
})