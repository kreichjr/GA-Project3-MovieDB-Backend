// External
const express = require('express')
require('dotenv').config()

// Internal


// PORT
const PORT = process.env.PORT || 3003

// Express Setup
const app = express()

// DB Connection


// Middleware
app.use(express.json())


app.listen(PORT, () => {
	console.log(`MovieFavDB backend online! Listening on port ${PORT}`)
})