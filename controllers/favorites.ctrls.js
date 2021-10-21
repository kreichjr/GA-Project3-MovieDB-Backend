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

const destroy = (req, res) => {
	db.Favorite.findByIdAndDelete(req.params.id, (err, deletedFavorite) => {
		if (err) return res.status(400).json({error: err})
		res.status(200).json(deletedFavorite)
	})
}


module.exports = {
	index,
	create,
	destroy,
	
}