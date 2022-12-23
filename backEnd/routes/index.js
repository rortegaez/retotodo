const express = require('express')
const router = express.Router()

const taskRoutes = require('./task')

router
	.use('/task', taskRoutes)

module.exports = router