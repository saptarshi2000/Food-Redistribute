const express = require('express')

const router = express.Router()

const signup = require('./signup')
const login = require('./login')
const claimfood = require('./claimfood')
const donatefood = require('./donatefood')
const availablefood = require('./availablefood')

router.use('/signup',signup)
router.use('/login',login)
router.use('/claimfood',claimfood)
router.use('/donatefood',donatefood)
router.use('/availabefood',availablefood)



module.exports = router