var express = require('express');
var router = express.Router();
const {addItem, updateItem, deleteItem, getItem} = require('../controllers/item');

/* GET users listing. */
router.post('/', addItem);
router.put('/:id',updateItem)
router.get('/',getItem)
router.delete('/:id', deleteItem)
module.exports = router;
