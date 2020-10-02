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
            max_people: req.body.max_people
        })

        await newfood.save().then(()=>{
            res.status(201).json({})
        })
    }catch(e){
        res.status(500).json()
    }
})

module.exports = router