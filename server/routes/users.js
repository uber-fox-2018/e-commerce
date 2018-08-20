var express = require('express');
var router = express.Router();
const {register, login} = require('../controllers/user');

/* GET users listing. */
router.post('/', register);
router.post('/login',login)
module.exports = router;
