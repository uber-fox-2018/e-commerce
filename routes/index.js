var express = require('express');
var router = express.Router();
var userController = require('../controller/userController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', userController.register);

router.post('/signin', userController.signIn);

module.exports = router;
