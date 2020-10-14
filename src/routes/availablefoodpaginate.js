const express = require('express')
const food = require('../model/food')

const router = express.Router()

router.get('/',async(req,res)=>{
    try{
        const page = parseInt(req.query.page) || 1
        const perPage = parseInt(req.query.perPage)

        var currentPage = page
        var prevPage =page===1?null: page - 1
        var nextPage = page+1
        const postCount = await food.countDocuments()
        var totalPages = Math.ceil(postCount/perPage)

        if(totalPages === page || totalPages ===0){
            nextPage = null
        }
        if(page >=totalPages){
            return res.json({message:"end of list"})
        }
        const foods = await food.find({}).skip((perPage*page)-perPage).limit(perPage)

        res.json({
            food:foods,
            nextPage:nextPage,
            totalPages:totalPages,
            currentPage:currentPage,
            prevPage,prevPage
        })

    }catch(err){
        console.log(err)
        res.status(500).json({})
    }
})

module.exports = router