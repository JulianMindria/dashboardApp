const express = require('express')
const route = express.Router()
const loginUser = require('./users')
const auth = require('./auth')


route.use('/user', loginUser)
route.use('/auth', auth)

module.exports = route