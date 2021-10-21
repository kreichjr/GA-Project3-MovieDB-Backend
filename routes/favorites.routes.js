const express = require('express')
const router = express.Router()

const ctrls = require('../controllers')

router.get('/', ctrls.favorites.index)
router.post('/', ctrls.favorites.create)

module.exports = router