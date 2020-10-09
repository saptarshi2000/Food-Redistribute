const express = require('express')
const validate = require('./validate')
const router = express.Router()

const signup = require('./signup')
const login = require('./login')
const logout = require('./logout')
const claimfood = require('./claimfood')
const donatefood = require('./donatefood')
const availablefood = require('./availablefood')

router.all('/auth/*',validate)

router.use('/signup',signup)
router.use('/login',login)
router.use('/auth/claimfood',claimfood)
router.use('/auth/logout',logout)
router.use('/donatefood',donatefood)
router.use('/availabefood',availablefood)
router.use('/logout',logout)



module.exports = router