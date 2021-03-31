const express = require('express')
const router = express.Router()
const controller = require('../controllers/product')

router.get('/', controller.product)

module.exports = router