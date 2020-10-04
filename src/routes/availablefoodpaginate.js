const express = require('express')
const food = require('../model/food')

const router = express.Router()

router.get('/',async(req,res)=>{
    try{
        const page = parseInt(req.query.page) || 1
        const perPage = 20

        var currentPage = page
        var prevPage =page===1?null: page - 1
        var nextPage = page+1
        const postCount = await food.countDocuments()
        var totalPages = Math.ceil(postCount/perPage)

        if(totalPages === page || totalPages ===0){
            nextPage = null
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
        res.status(500).json({})
    }
})

module.exports = router