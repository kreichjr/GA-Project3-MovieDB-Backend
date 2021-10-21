const mongoose = require('mongoose')
const { model, Schema } = mongoose

const favoriteSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	year: {
		type: Number
	},
	posterUrl: {
		type: String
	},
	language: {
		type: String
	},
	imdbId: {
		type: String
	},
	rated: {
		type: String
	},
	runtime: {
		type: String
	},
	hasWatched: {
		type: Boolean,
		default: true
	}
})

module.exports = model('Favorite', favoriteSchema)