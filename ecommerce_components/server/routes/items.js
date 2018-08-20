const router = require('express').Router();
const {getItems, newItem, getItem, updateItem, deleteItem} = require('../controllers/item');
const isLogin =  require('../helpers/isLogin');
const auth =  require('../helpers/auth');

const authUser  = auth(['user', 'admin'])
const authAdmin = auth(['admin'])

router.get('/', isLogin, authUser, getItems);
router.post('/', isLogin, authAdmin, newItem);
router.get('/:id',isLogin, authUser, getItem);
router.put('/:id',isLogin, authAdmin, updateItem);
router.delete('/:id',isLogin, authAdmin, deleteItem);

module.exports = router;