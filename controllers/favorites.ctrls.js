const db = require('../models')

const index = (req, res) => {
	db.Favorite.find({}, (err, foundFavorites) => {
		if (err) return res.status(400).json({error: err})
		res.status(200).json(foundFavorites)
	})
}

const create = (req, res) => {
	db.Favorite.create(req.body, (err, createdFavorite) => {
		if (err) return res.status(400).json({error: err})
		res.status(201).json(createdFavorite) 
	})
}


module.exports = {
	index,
	create,
	
}