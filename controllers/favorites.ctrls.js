const db = require('../models')

const index = (req, res) => {
	res.send('You hit the index route')
}

const create = (req, res) => {
	db.Favorite.create(req.body, (err, createdFavorite) => {
		if (err) return res.status(400).json({error: err})
		res.status(200).json(createdFavorite) 
	})
}

module.exports = {
	index,
	create,
}