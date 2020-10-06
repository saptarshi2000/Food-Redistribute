const express = require('express')
const router = express.Router()

const Food = require('../model/food')

router.post('/', async(req, res) => {
    try {
        var newfood = new Food({
            title: req.body.title,
            items: req.body.items,
            food_type: req.body.food_type,
            posted_by: req.body.posted_by,
            max_people: req.body.max_people,
            city:req.body.city,
            expirationDate:new Date(Date.now() + (parseFloat(req.body.hour) * 3600 * 1000))
        })

        await newfood.save().then(()=>{
            res.status(201).json({})
        })
    }catch(err){
        console.error(err)
        res.status(500).json({})
    }
})

module.exports = router