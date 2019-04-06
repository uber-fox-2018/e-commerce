const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/user')
const axios = require ('axios')
require('dotenv').config();

function createFBPassword(email) {
  return email.split("").reverse().join("") + "123";
}

function checkPasswordFormat(password) {
  //password min 6 characters, at least one letter, one number and one special character
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/
  return regex.test(password)
}

function checkEmailFormat(email) {
  //email format must valid
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(email)
}

class UserController {
  static loginFb(req, res) {
    let url_user_info = `https://graph.facebook.com/me?fields=id,name,email&access_token=${req.body.token}`
    axios.get(url_user_info)
      .then(resFB => {
        console.log('resfb', resFB.data)
        //find wether the response email already in database or not
        User.findOne({ email: resFB.data.email })
          .then(function(dataUser) {
            if (dataUser) {
              let token = jwt.sign({ id: dataUser._id, name: dataUser.name, email: dataUser.email , role : dataUser.role}, process.env.JWT_KEY)
              res.status(200)
                .json({
                  message: "successfully login/register",
                  role : dataUser.role,
                  token: token
                })
            } else {
              User.create({
                  name: resFB.data.name,
                  email: resFB.data.email,
                  password: createFBPassword(resFB.data.email)
                })
                .then(function(dataCreated) {
                  let token = jwt.sign({ id: dataCreated._id, name: dataCreated.name, email: dataCreated.email , role : dataCreated.role}, process.env.JWT_KEY)
                  res.status(200)
                    .json({
                      message: "successfully login/register",
                      role : dataCreated.role,
                      token: token
                    })
                }).catch(function(err) {
                  res.status(500)
                    .json({
                      message: 'Internal server error register user',
                      err: err
                    })
                })
            }
          })
          .catch(function(err) {
            res.status(500)
              .json({
                message: 'Server error finding user'
              })
          })
      })
      .catch(function(err) {
        res.status(500)
          .json({
            message: 'Server error finding user'
          })
      })
  }

  static register(req, res) {
    if (checkEmailFormat(req.body.email)) {
      if (checkPasswordFormat(req.body.password)) {
        User.findOne({ email: req.body.email })
          .then(function(dataUser) {
            if (dataUser) {
              res.status(201)
                .json({
                  message: 'Email already exist'
                })
            } else {
              User.create({
                  name: req.body.name,
                  email: req.body.email,
                  password: req.body.password,
                  role : req.body.role
                })
                .then(function(dataCreated) {
                  res.status(200)
                    .json({
                      message: "user sucessfully registered",
                      data: dataCreated
                    })
                }).catch(function(err) {
                  res.status(201)
                    .json({
                      message: 'Internal server error sign up user',
                      err: err
                    })
                })
            }
          })
          .catch(function(err) {
            res.status(201)
              .json({
                message: 'Internal server error finding user'
              })
          })
      } else {
        res.status(201).json({
          message: 'Password minimum 6 characters, at least one letter, one number and one special character'
        })
      }
    } else {
      res.status(201).json({
        message: 'Email format is not correct'
      })
    }
  }

  static login(req, res) {
    User.findOne({ email: req.body.email })
      .then(dataUser => {
        if (dataUser) {
          let password = bcrypt.compareSync(req.body.password, dataUser.password)
          if (password) {
            let token = jwt.sign({ id: dataUser._id, name: dataUser.name, email: dataUser.email , role : dataUser.role }, process.env.JWT_KEY)
            res.status(200)
              .json({
                message: "User successfully login",
                role : dataUser.role,
                token: token
              })
          } else {
            res.status(201).json({
              message: 'Wrong password.'
            })
          }
        } else {
          res.status(201)
            .json({ message: 'wrong email or password' })
        }
      })
      .catch(err => {
        res.status(500)
          .json({
            message: 'Internal server error finding user'
          })
      })
  }
}

module.exports = UserController;