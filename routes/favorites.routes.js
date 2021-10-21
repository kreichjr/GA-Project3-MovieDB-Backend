const express = require('express')
const router = express.Router()

const ctrls = require('../controllers')

router.get('/', ctrls.favorites.index)
router.post('/', ctrls.favorites.create)
router.delete('/:id', ctrls.favorites.destroy)

module.exports = router