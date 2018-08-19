const express = require ('express')
const router = express.Router()
const Category = require('../models/category')
const { userAuth } = require('../middlewares/auth')

router.post('/', userAuth, Category.addCategory)
router.delete('/', userAuth, Category.removeCategory)