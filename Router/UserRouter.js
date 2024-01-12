const express = require('express')
const router = express.Router()
const user = require('../Controller/UserController')
const auth = require('../MiddleWare/Auth')
router.post('/user', user.addUser)
router.post('/user/login',  user.loginUser)
router.get('/user', user.getAllUsers)

router.post('/userSignUp', user.signUP)//signup api
router.put('/updateStatus/:email', user.changeStatus)
module.exports = router