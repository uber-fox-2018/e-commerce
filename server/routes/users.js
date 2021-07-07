const router = require('express').Router()
const Controller = require('../controllers/users')
const auth = require('../helpers/auth')
const authorz = require('../helpers/authorz')


router.post('/register', Controller.register)
      .post('/login', Controller.login)
      .post('/signin/facebook',Controller.loginFb)
      .get('/', Controller.findAll)
      .get('/:id', Controller.findOne)
      .put('/:id', Controller.update)
      .delete('/:id', Controller.delete)

module.exports = router