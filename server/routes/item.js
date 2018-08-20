var express = require('express');
var router = express.Router();
const ItemController = require('../controller/itemController')
const User = require('../controller/userController')



router.post('/addItem',User.authentication,ItemController.addItem)
router.get('/listitem',ItemController.getItem)
router.get('/filter/:category',ItemController.sortItem)
router.post('/edit/:id',User.authentication,ItemController.editItem)
router.delete('/delete/:id',User.authentication,ItemController.deleteItem)
router.get('/searchItem',ItemController.search)


module.exports = router