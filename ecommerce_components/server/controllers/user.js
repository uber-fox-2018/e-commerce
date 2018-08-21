const User = require('../models/user');
const filterBody = require('../helpers/updateAuth');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const bcrypt = require("bcryptjs");

module.exports = {
    
    login: (req, res) => {
        const { email, password } = req.body;
      
        User.findOne({email : email})
            .then(user => {
               
                let isTrue = bcrypt.compareSync(password, user.password)
               
                if(isTrue){
                    console.log(`${user.name} has successfully logged in`)
                    let token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY)
                    res.status(200).json({
                        msg: `${user.name} is successfully logged in`, 
                        token
                    })
                }else{
                    res.status(400).json({
						mgs: "failed to login"
					});
                }   
            })
            .catch(err=>{
                res.status(400).json({
					msg: "check name and password"
				});
            })

    },

    signup : (req, res) =>{
        const {name, email, password} = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        User.create({
            name,
            email,
            password: hash,
        })
            .then(user=>{
                console.log(`${user.name} has successfully login`)
                let token = jwt.sign({id: user._id, role: user.role}, process.env.JWT_SECRET_KEY)
               
                res.status(201).json({
                    msg: 'success',
                    user,
                    token
                })
            })
            .catch(err =>{
                console.log(err)
            });
    },

    getUsers : (req, res) =>{
        User.find()
        .populate("todos")
        .then(users => {
            res.status(200).json({
                msg: "success!", 
                users,
                
            });
        })
        .catch(err => {
            res.status(500).json({msg:err});
        })
    },

    getUser : (req, res) =>{
        // User.findById(req.params.userId)
        User.findOne({_id: req.params.userId})
        .then(user=>{
            res.status(200).json({
                msg:'success', 
                user,
                
            })
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }, 

    updateUser : (req, res) => {
        let allowedData = filterBody(req.body, ['name', 'email'])
        User.findOneAndUpdate({_id: req.params.userId}, allowedData, {new: true})
        .then(updatedUser=>{
            res.status(200).json({
                msg: 'success',
                updatedUser,
                
            })
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }, 

    updateUserRole : (req , res) =>{
        User.findOneAndUpdate({_id: req.params.userId}, {role: req.body.role}, {new: true})
        .then(updatedUser=>{
            res.status(200).json({
                msg: 'success',
                updatedUser,
              
            })
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    },

    deleteUser : (req, res) =>{
        User.remove({_id: req.params.userId})
        .then(()=>{
            res.status(200).json({
                msg : "Successfully deleted!",
                
            })
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }
}