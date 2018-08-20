var express = require('express');
var router = express.Router();
const {getItem, addItem, deleteItem} = require('../controllers/itemController')

router.get('/', getItem)
router.post('/', addItem)
router.delete('/:id', deleteItem)

module.exports = router;
