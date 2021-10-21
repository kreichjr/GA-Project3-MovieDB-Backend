// External
const express = require('express')
require('dotenv').config()

// Internal
const routes = require('./routes')

// PORT
const PORT = process.env.PORT || 3003

// Express Setup
const app = express()

// DB Connection
require('./config/db.connection')

// Middleware
app.use(express.json())

app.use('/favorites', routes.favorites)


app.listen(PORT, () => {
	console.log(`MovieFavDB backend online! Listening on port ${PORT}`)
})