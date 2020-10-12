const jwt = require("jsonwebtoken")
const User = require('../model/member')
const express = require('express')
const router = express.Router()
router.use((req, res, next) => {
    const {
        authorization
    } = req.headers
    if (!authorization) {
        return res.status(401).json({
            error: "you must be logged in"
        })
    }
    const token = authorization.replace("Bearer ", "")
    jwt.verify(token, "private-key", (err, payload) => {
        if (err) {
            res.status(401).json({
                error: "you must be logged in"
            })

        } else {
            const {
                _id
            } = payload
            User.findById(_id).then(userdata => {
                req.user = userdata
            })
            req._id = _id
            next()
        }


    })
})
module.exports = router