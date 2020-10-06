const express = require('express')

const router = express.Router()

const signup = require('./signup')
const login = require('./login')
const logut = require('./logout')
const claimfood = require('./claimfood')
const donatefood = require('./donatefood')
const availablefood = require('./availablefood')

router.all('/auth/*',(req,res,next)=>{
    console.log("t")
    res.send("d")
    next()
})
router.use('/signup',signup)
router.use('/login',login)
router.use('/auth/claimfood',claimfood)
router.use('/auth/logout',logut)
router.use('/donatefood',donatefood)
router.use('/availabefood',availablefood)


module.exports = router