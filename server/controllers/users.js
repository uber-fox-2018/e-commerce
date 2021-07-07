const User = require('../models/users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const axios = require("axios")


module.exports = {
    register: (req,res) => {
        let {name, email, password,role} = req.body
        console.log(req.body);

        let salt = bcrypt.genSaltSync(8)
        let hash = bcrypt.hashSync(password, salt)
    

        User
        .create({ 
            name: name,
            email: email,
            password: hash,
            role:role
        })
        .then(newUser => {
         
            const token = jwt.sign({
                id: newUser._id,
                role: newUser.role
            }, process.env.token_jwt)
            res.status(200).json({
                msg: 'register success',
                data: newUser,
                token: token
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            })
        })
    },
    login: (req, res) => {

        var {
            email,
            password, role
        } = req.body
        User
            .findOne({
                email: email,
                role:role
            })
            .then(user => {
                let {
                    email,
                    password,
                    role
                } = req.body
                User
                    .findOne({
                        email:email ,
                        role:role
                    })

                    .then(user => {
                        if (user) {
                            let checkPass = bcrypt.compareSync(password, user.password)
                            if (checkPass) {

                                let token = jwt.sign({
                                    id: user._id,
                                    email: user.email,
                                    role: user.role
                                }, 'muhammad-riza')
                                res.status(200).json({
                                        msg: "login success",
                                        token
                                    })

                                    .catch(err => {
                                        console.log(err);

                                        res.status(500).json({
                                            msg: "error"
                                        })
                                    })
                            }

                        }
                    })
            })
    },
    findAll: (req, res) => {
        User
            .find()
            .then(user => {
                res.status(200).json({
                    msg: 'create success',
                    data: user
                })
            })

            .catch(err => {
                res.status(500).json({
                    msg: 'error'
                })
            })
    },
    findOne: (req, res) => {
        User
            .findOne({
                id: req.params.id
            })
            .then(user => {
                res.status(200).json({
                    msg: 'success find id',
                    data: user
                })
            })

            .catch(err => {
                res.status(500).json({
                    msg: 'error'
                })
            })

    },

    update: (req, res) => {
        User
            .update({
                _id: req.params.id
            }, {
                $set: {
                    email: req.body.email,
                    password: req.body.password,
                    name: req.body.name,
                }
            })

            .then(user => {
                res.status(200).json({
                    msg: 'update success',
                    data: user
                })
            })

            .catch(err => {
                res.status(500).json({
                    msg: 'error'
                })
            })
    },

    delete: (req, res) => {
        User
            .deleteOne({
                _id: req.params.id
            })

            .then(user => {
                res.status(200).json({
                    msg: 'delete success',
                    data: user

                })
            })

            .catch(err => {
                res.status(500).json({
                    msg: 'error'
                })
            })
    },
    loginFb: (req, res) => {

        let url_user_info = `https://graph.facebook.com/me?fields=id,name,email&access_token=`
        axios.get(url_user_info)
            .then(userFb => {

                User.findOne({
                        email: userFb.data.email
                    })
                    .then(user => {
                        if (user == null) {
                            User.create({
                                    name: userFb.data.name,
                                    email: userFb.data.email,
                                    password: `${userFb.data.id}`
                                })
                                .then((newUser) => {

                                    let token = jwt.sign({
                                        id: newUser._id,
                                        email: newUser.email
                                    }, 'muhammad-riza')
                                    res.status(201).json({
                                        message: `successfully registered`,
                                        token
                                    })
                                })
                                .catch((err) => {
                                    res.status(400).json({
                                        message: err.message
                                    })
                                })
                        } else {
                            let token = jwt.sign({
                                id: user._id,
                                email: user.email
                            }, 'muhammad-riza')
                            res.status(200).json({
                                message: `login successfully`,
                                token
                            })
                        }
                    })
                    .catch((err) => {
                        res.status(400).json({
                            message: err.message
                        })
                    })
            })


    }
}