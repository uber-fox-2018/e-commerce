var express = require('express');
var router = express.Router();
const { addItem, getAllItem, editItem, removeItem } = require('../controllers/controllerItems')


router.post('/items', addItem)
router.get('/items', getAllItem)
router.put('/items/edit/:id', editItem)
router.delete('/items/delete/:id', removeItem)
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
