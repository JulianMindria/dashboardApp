const express = require('express')
const route = express.Router()
const userRouter = require('./userRouter')
const spotRouter = require('./spotRouter')
const ResRouter = require('./reservationRouter')

route.use('/user', userRouter)
route.use('/parking-spots', spotRouter)
route.use('/reservation', ResRouter)

module.exports = route