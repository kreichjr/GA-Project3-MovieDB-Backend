const db = require('../models')

const sendStatusAndJson = (req, res, code) => {
	return (err, dbResult) => {
		if (err) return res.status(400).json({error: err})
		res.status(code).json(dbResult)
	}
}

const index = (req, res) => {
	db.Favorite.find({}, sendStatusAndJson(200))
}

const create = (req, res) => {
	db.Favorite.create(req.body, sendStatusAndJson(201))
}

const update = (req, res) => {
	db.Favorite.findByIdAndUpdate(req.params.id, req.body, {new: true}, sendStatusAndJson(200))
}

const destroy = (req, res) => {
	db.Favorite.findByIdAndDelete(req.params.id, sendStatusAndJson(200))
}

const seed = (req, res) => {
	const seedData = require('../models/seed')
	db.Favorite.create(seedData, sendStatusAndJson(201))
}


module.exports = {
	index,
	create,
	update,
	destroy,
	seed,
}