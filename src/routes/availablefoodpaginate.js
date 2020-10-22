const express = require('express')
const food = require('../model/food')

const router = express.Router()

router.get('/',async(req,res)=>{
    try{
        console.log("test")
        const page = parseInt(req.query.page) || 1
        const perPage = parseInt(req.query.perPage)
        var query = {
            claimed:false
        }
        console.log(req.query.city)
        if (req.query.city) {
            var _city = req.query.city.toLowerCase()
            query.city = _city
        }
        console.log(perPage)
        var currentPage = page
        var prevPage =page===1?null: page - 1
        var nextPage = page+1
        const postCount = await food.countDocuments({claimed:false})
        console.log(postCount)
        var totalPages = Math.ceil(postCount/perPage)

        if(totalPages === page || totalPages ===0){
            nextPage = null
        }
        // if(page >=totalPages){
        //     return res.json([])
        // }
        const foods = await food.find(query).skip((perPage*page)-perPage).limit(perPage)

        console.log(page,perPage)
        // console.log(foods)
        res.json(foods)

    }catch(err){
        console.log(err)
        res.status(500).json({})
    }
})

module.exports = router