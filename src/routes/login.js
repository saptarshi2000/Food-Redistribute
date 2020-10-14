const express = require('express')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')


const MemberTable = require('../model/member')

const router = express.Router()

router.post('/', async (req, res) => {
    if (req.body.token != null) {
        try {
            jwt.verify(req.body.token, "private-key", (err, decoded) => {
                if (err) {
                    console.log("POST /login HTTP/1.1 400 authentication_error" + Date.now())
                    res.status(401).json({
                        "result": "unauthenticated_access"
                    })
                } else {
                    console.log("POST /login HTTP/1.1 200 access_gained" + Date.now())
                    res.status(200).json({
                        "result": "ok"
                    })
                }
            })
        } catch (e) {
            console.log("POST /login HTTP/1.1 500" + Date.now())
            res.status(500).json({})
        }
    } else {
        const email = req.body.email
        const password = req.body.password
        if (!email || !password) {
            console.log("POST /login HTTP/1.1 400" + Date.now())
            return res.status(422).json({
                error: "please add email or password"
            })
        }

        try {
            const member = await MemberTable.findOne({
                email: email
            })
            if (!member) {
                console.log("POST /login HTTP/1.1 400 user_not_exist" + Date.now())
                res.status(404).json({
                    error: "Invalid email"
                })
            } else {
                if (await bcryptjs.compare(password, member.password)) {
                    const payload = {
                        _id: member._id,
                        email: email
                    }
                    const token = jwt.sign(payload, "private-key", {
                        expiresIn: '24h'
                    })
                    console.log("POST /login HTTP/1.1 200 access_gained" + Date.now())
                    res.status(200).json({
                        "token": token,
                        "result": "ok"
                    })
                } else {
                    console.log("POST /login HTTP/1.1 400" + Date.now())
                    res.status(400).json({
                        error: "Invalid Password"
                    })
                }
            }
        } catch (err) {
            console.log("POST /login HTTP/1.1 400" + Date.now())
            console.log(err)
        }
    }
})



module.exports = router