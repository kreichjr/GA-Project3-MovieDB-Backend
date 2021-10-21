const mongoose = require('mongoose')

const connectionStr = process.env.MONGODB_URI || 'mongodb://localhost:27017/movieFavDB'

mongoose.connect(connectionStr, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

mongoose.connection.on('connected', () => console.log('Connected to mongodb database!'))
mongoose.connection.on('disconnected', () => console.log('Disonnected from mongodb database!'))
mongoose.connection.on('error', (err) => console.log('Error: ', err))