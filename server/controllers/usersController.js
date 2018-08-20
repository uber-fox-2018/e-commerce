const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const nodeMailer = require('nodemailer')
require('dotenv').config()

const register = (req,res) => {
    const { username, email, password } = req.body
    
    if (password == undefined || password.length == 0) {
        res.status(400).json({
            message: `password is required`
        })
    }
    User.create({
        username: username,
        email: email,
        password: password
    })
    .then((data) => {
        res.status(201).json({
            message: `User successfully registered!`,
            data
        })
    })
    .catch((err) => {
        res.status(400).json({
            message: `Something is wrong`,
            err
        })
    })
}

const getAllUser = (req,res) => {
    User.find({})
    .then((data) => {
        if (data.length == 0) {
            res.status(404).json({
                message: `cannot get users data`,
                data
            })
        } else {
            res.status(200).json({
                message: `succes get all users`,
                data
            })
        }
    }) 
    .catch((err) => {
        res.status(400).json({
            message: `Something is wrong`,
            err
        })
    })
}

const login = (req, res) => {
    const { email, password } = req.body
    User.findOne({
        email: email
    })
    .then((data) => {
        if(data) {
            let passwordCheck = bcrypt.compareSync(password, data.password)
            if (passwordCheck) {
                let token = jwt.sign({
                    id: data._id,
                    email: data.email,
                    username: data.username
                }, process.env.jwt_secret)
                res.status(200).json({
                    message: `Successfully login`,
                    token
                })
            } else {
                res.status(400).json({
                    message: `Username/password is invalid`
                })
            } 
        } else {
            res.status(400).json({
                message: `Username/password is invalid`
            })
        }
    })
    .catch((err) => {
        res.status(400).json({
            message: err.message
        })
    })
}

module.exports = {
    register,
    getAllUser,
    login
}



