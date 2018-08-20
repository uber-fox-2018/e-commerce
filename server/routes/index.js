var express = require('express');
var router = express.Router();
const { signin, signup } = require('../controllers/controllerusers')
const items = require('./items')
router.post('/signin', signin)
router.post('/signup', signup)

router.use('/', items)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
