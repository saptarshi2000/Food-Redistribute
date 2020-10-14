const express = require('express')
const validate = require('./validate')
const router = express.Router()

const signup = require('./signup')
const login = require('./login')
const logout = require('./logout')
const claimfood = require('./claimfood')
const donatefood = require('./donatefood')
const availablefood = require('./availablefood')
const availabefoodpaginate = require('./availablefoodpaginate')
const claimedlist = require('./claimedlist')


router.all('/auth/*',validate)

router.use('/signup',signup)
router.use('/login',login)
router.use('/auth/claimfood',claimfood)
router.use('/auth/claimedlist',claimedlist)
router.use('/auth/logout',logout)
router.use('/donatefood',donatefood)
router.use('/availabefood',availablefood)
router.use('/avaiablefoodpaginate',availabefoodpaginate)
router.use('/logout',logout)



module.exports = router