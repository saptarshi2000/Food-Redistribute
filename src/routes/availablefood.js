const express = require('express')
const food = require('../model/food')


const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const foods = food.find({
                city: req.query.city.toLowerCase,
                max_people: {
                    $gt: parseInt(req.query.max_people)
                }
            })
            .sort({
                max_people: -1
            }).exec((err,docs)=>{
                
            })
    } catch (err) {

    }
})

module.exports = router