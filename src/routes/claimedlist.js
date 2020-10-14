const express = require('express')
const food = require('../model/food')

const router = express.Router()
router.get('/', async (req, res) => {
    try {
        var query = {
            claimed_by: req._id
        }
        const list = await food.find(query)
        console.log("GET /claimedlist HTTP/1.1 200" + Date.now())
        res.status(200).json(list)
    }catch(err){
        console.log("GET /claimedlist HTTP/1.1 500" + Date.now())
        console.error(err)
        res.status(500).json({message:"Internal server error"})
    }
})

module.exports = router