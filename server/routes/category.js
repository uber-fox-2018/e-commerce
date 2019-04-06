const express = require ('express')
const router = express.Router()
const Category = require('../controllers/category')
const { userAuth } = require('../middlewares/auth')

router.post('/', userAuth, Category.addCategory)
router.delete('/:id', userAuth, Category.removeCategory)
router.get('/', Category.showCategory)

module.exports = router;