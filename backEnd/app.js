const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require ('./routes/index')
const cors = require('cors')

const mongoUrl = 'mongodb+srv://raul:raul00@clusterexpre0.j09bzof.mongodb.net/todos?retryWrites=true&w=majority'

mongoose.connect(mongoUrl)
	.then(x => {
		console.log(`Conectado a: '${x.connections[0].name}'`)
	})
	.catch(x => {
		console.log('Error connections')
	})

	app.use(cors())
	app.use(express.json())
	app.use(express.urlencoded())

	app.use(routes)

	app.listen(8000, () => {
		console.log('App is listenning on port 8000')
	})