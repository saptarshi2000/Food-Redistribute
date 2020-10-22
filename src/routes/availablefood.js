const express = require('express')
const food = require('../model/food')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        console.log("GET /availablefood HTTP/1.1 " + Date.now())
        var query = {
            claimed:false
        }
        console.log(req.query.city)
        if (req.query.city) {
            var _city = req.query.city.toLowerCase()
            query.city = _city
        }
        console.log(query)

        const foods = food.find(query)
            .sort({
                max_people: 1
            }).exec((err, docs) => {
                if (err) return res.status(400).json({})
                return res.status(202).json(docs)
            })
    } catch (err) {
        console.log("GET /availablefood HTTP/1.1 500" + Date.now())
        console.log(err)
        return res.status(500).json({})
    }
})

router.get('/v2', async (req, res) => {
    try {

        var query = {
            max_people: {
                $gt: 1
            },
            claimed:false
        }
        if (req.query.city) {
            var _city = req.query.city.toLowerCase()
            query.city = _city
        }
        if(req.query.max_people){
            query.max_people ={
                $gt: req.query.max_people
            }
        }

        console.log(_city)
        const foods = food.find(query)
            .sort({
                max_people: 1
            }).exec((err, docs) => {
                if (err) return res.status(400).json({})
                return res.status(202).json(docs)
            })
    } catch (err) {
        console.log(err)
        return res.status(500).json({})
    }
})

module.exports = router