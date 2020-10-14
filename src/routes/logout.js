const express = require('express')
const tokenlist = require('../model/blasklistedtoken')

const router = express.Router()

router.post('/',async(req,res)=>{
    try{
        var token = new  tokenlist({
            usertoken:req.token
        })
        await token.save()
        console.log("POST /logout HTTP/1.1 200 logout_ok" + Date.now())
        res.json({message:"ok"})
    }catch(err){console.log("POST /logout HTTP/1.1 500" + Date.now())
        res.json({message:err})
    }
    
})

module.exports = router
