const db = require('../models')

const sendStatusAndJson = (req, res, code) => {
	return (err, dbResult) => {
		if (err) return res.status(400).json({error: err})
		res.status(code).json(dbResult)
	}
}

const index = (req, res) => {
	console.log('index hit')
	db.Favorite.find({}, sendStatusAndJson(req, res, 200))
}

const create = (req, res) => {
	console.log('create hit')
	db.Favorite.create(req.body, sendStatusAndJson(req, res, 201))
}

const update = (req, res) => {
	console.log('update hit')
	db.Favorite.findByIdAndUpdate(req.params.id, req.body, {new: true}, sendStatusAndJson(req, res, 200))
}

const destroy = (req, res) => {
	console.log('destroy hit')
	db.Favorite.findByIdAndDelete(req.params.id, sendStatusAndJson(req, res, 200))
}

const seed = (req, res) => {
	console.log('seed hit')
	const seedData = require('../models/seed')
	db.Favorite.create(seedData, sendStatusAndJson(req, res, 201))
}


module.exports = {
	index,
	create,
	update,
	destroy,
	seed,
}