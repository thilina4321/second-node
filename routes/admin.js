const express = require('express')
const router = express.Router()
const controller = require('../controllers/product')


router.get('/product', controller.getAddProduct)
router.post('/product', controller.postAddProduct)


module.exports = router
