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
	rating: {
		type: Number
	},
	hasWatched: {
		type: Boolean,
		default: true
	}
})

module.exports = model('Favorite', favoriteSchema)