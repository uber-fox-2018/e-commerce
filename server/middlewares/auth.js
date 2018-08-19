const User = require('../models/user')
const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = {
  userAuth: function(req, res, next) {
    let token = req.headers.token
    if (token) {
      try {
        let decoded = jwt.verify(token, process.env.JWT_KEY)
        User
          .findOne({
            _id: decoded.id
          })
          .then(user => {
            if (user == null) {
              res.status(401)
              res.json({ message: "user not authorized" })
            } else {
              next()
            }
          })
          .catch(err => {
            res.status(500)
            res.json({ message: 'internal server error' })
          })
      } catch (err) {
        res.status(400)
          .json({ message: "token invalid" })
      }
    } else {
      res.status(401)
      res.json({ message: 'token not found!' })
    }
  }
}