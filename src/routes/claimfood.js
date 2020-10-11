const { compareSync } = require('bcryptjs')
const { Router } = require('express')
const express = require('express')
const foods = require('../model/food')

const router = express.Router()

router.patch('/',async(req,res)=>{
    try{
        var food = await foods.findOneAndUpdate({_id:req.body.food_id},{claimed_by:req._id,claimed:true},{new:true})

        if(food){
            res.status(200).json({result:"ok",food})
        }else{
            res.status(404).json({message:"not found"})
        }
        
    }catch(err){
        console.error(err)
        res.status(500).json({message:"internal server error"})
    }
})

module.exports = router