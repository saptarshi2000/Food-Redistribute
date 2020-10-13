const express = require('express')
const food = require('../model/food')

const router = express.Router()
router.get('/', async (req, res) => {
    try {
        var query = {
            claimed_by: req._id
        }
        const list = await food.find(query)
        res.status(200).json(list)
    }catch(err){
        console.error(err)
        res.status(500).json({message:"Internal server error"})
    }
})

module.exports = router