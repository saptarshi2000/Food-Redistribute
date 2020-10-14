const express = require('express')
const foods = require('../model/food')

const router = express.Router()

router.patch('/',async(req,res)=>{
    try{
        var food = await foods.findOneAndUpdate({_id:req.body.food_id,claimed:false},{claimed_by:req._id,claimed:true},{new:true})
        if(food){
            console.log("PATCH /claimfood HTTP/1.1 200 " + Date.now())
            res.status(200).json({result:"ok",food})
        }else{
            console.log("PATCH /claimfood HTTP/1.1 404" + Date.now())
            res.status(404).json({message:"not found"})
        }
        
    }catch(err){
        console.log("PATCH /claimfood HTTP/1.1 500" + Date.now())
        console.error(err)
        res.status(500).json({message:"internal server error"})
    }
})

module.exports = router