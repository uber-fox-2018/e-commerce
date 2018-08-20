const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {

    register: (req, res) => {
        // console.log(req.body)
        User.findOne({
            email: req.body.email
        })
        .then(user => {
            if (user == null) {
                let salt = bcrypt.genSaltSync(10);
                let password = bcrypt.hashSync(req.body.password, salt);
                console.log(req.body)

                User.create({
                    email: req.body.email,
                    password: password,
                    role: 'customer'
                })
                .then(userData => {
                    res.status(200).json({
                        msg: `Registration successful!`, 
                        data: userData
                    })
                })
                .catch(err => {
                    res.status(500).json(err.message);
                })
            } else {
                res.status(500).json({
                    msg: `Data already exist`, 
                    data: user
                })
            }
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
    }, 

    signIn: (req, res) => {
        User.findOne({
            email: req.body.email
        })
        .then(user => {
            if (user) {
                let password = bcrypt.compareSync(req.body.password, user.password);

                if (password) {
                    var token = jwt.sign({id: user.id, email: user.email}, process.env.secret_key);
                    res.status(200).json({
                        msg: `Login successful!`, 
                        token: token
                    })
                   
                } else {
                    
                    res.status(401).json({
                        msg: `Email/Password invalid`
                    })
                }
            } else {
                res.status(401).json({
                    msg: `Email/Password invalid`
                })
            }
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
    }
}