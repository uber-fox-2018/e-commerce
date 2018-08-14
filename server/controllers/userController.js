const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

var salt = bcrypt.genSaltSync(8);

class UserController {
    static register(req, res){
        let {email, name} = req.body
        var hash = bcrypt.hashSync(req.body.password, salt);
        console.log(req.body);
        User.findOne({email: email})
        .then(user => {
            console.log(user);
            
            if(user === null){
                User.create({
                    name, email, password: hash
                })
                .then(newUser => {
                    jwt.sign({ id: newUser._id, name: newUser.name }, process.env.secretKey, function(err, token) {
                        res.status(201).json({
                            token: token,
                            user: newUser
                        })
                    })
                })
                .catch(err => {
                    res.status(400).json(err)
                })
            } else {
                res.status(400).json({
                    msg: 'Email already registered!'
                })
            }
        })
    }

    static login(req, res){
        let {email} = req.body
        User.findOne({email: email})
        .then(user => {
            if(user){
                let compare = bcrypt.compareSync(req.body.password, user.password)
                if(compare){
                    jwt.sign({ id: user._id, name: user.name }, process.env.secretKey, function(err, token) {
                        res.status(201).json({
                            name: user.name,
                            token: token
                        })
                    })
                } else {
                    res.status(401).json('Wrong password!')
                }
            } else {
                res.status(401).json('Email not found!')
            }
        })
    }
}

module.exports = UserController