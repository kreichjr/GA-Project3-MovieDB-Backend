// External
const express = require('express')
const cors = require('cors')
require('dotenv').config()

// Internal
const routes = require('./routes')

// PORT
const PORT = process.env.PORT || 3003

// Express Setup
const app = express()

// DB Connection
require('./config/db.connection')

// Cors setup
const whitelist = ['http://localhost:3000', 'heroku link']
const corsOptions = {
	origin: (origin, callback) => {
		if (whitelist.indexOf(origin) !== -1 || !origin) {
			callback(null, true)
		} else {
			callback(new Error('Not allowed by CORS'))
		}
	}
}

// Middleware
app.use(express.json())
app.use(cors(corsOptions))

app.use('/favorites', routes.favorites)


app.listen(PORT, () => {
	console.log(`MovieFavDB backend online! Listening on port ${PORT}`)
})