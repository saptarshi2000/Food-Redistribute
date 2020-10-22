const jwt = require("jsonwebtoken")
const User = require('../model/member')
const tokenTable = require('../model/blasklistedtoken')
const express = require('express')
const router = express.Router()
router.use(async (req, res, next) => {
    try {
        const {
            authorization
        } = req.headers
        if (!authorization) {
            return res.status(401).json({
                error: "you must be logged in"
            })
        }
        const token = authorization.replace("Bearer ", "")
        const _token = await tokenTable.findOne({
            usertoken: token
        })
        //console.log(_token)
        if (_token) {
            return res.status(400).json({
                error: "authentication error"
            })
        }
        jwt.verify(token, "private-key", (err, payload) => {
            if (err) {
                console.log("test")
                res.status(401).json({
                    error: "auth_error"
                })

            } else {
                const {
                    _id
                } = payload
                User.findById(_id).then(userdata => {
                    req.user = userdata
                })
                req._id = _id
                req.token = token
                next()
            }


        })
    }catch(err){
        res.json({error:"error"})
    }
})
module.exports = router