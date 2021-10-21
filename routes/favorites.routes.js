const express = require('express')
const router = express.Router()

const ctrls = require('../controllers')

router.get('/', ctrls.favorites.index)
router.post('/', ctrls.favorites.create)
router.put('/:id', ctrls.favorites.update)
router.delete('/:id', ctrls.favorites.destroy)
router.post('/seedMe', ctrls.favorites.seed)

module.exports = router