const express= require('express')
const { signup, login, dashboard } = require('../controller/user')
const auth = require('../middleware/auth')
const isPermission = require('../middleware/permission')
const router=express.Router()

router.post('/signup',signup)
router.post('/login',login)
router.post('/:path',auth,isPermission,dashboard)

module.exports = router