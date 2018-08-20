const User = require('../models/user');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken');

module.exports = {
    register: (req, res) =>{
       
        console.log(req.body);
        const {name, em, pass} = req.body
        let hash = bcrypt.hashSync(pass, salt);
        
        User.create({
            username : name,
            email : em,
            password : hash
        })
        .then((result) => {
            res.status(201).json({
                msg: 'succes'
            })
        })
        .catch((err) => {
            res.status(500)
        });
    },
    login:(req, res) =>{
        console.log('masuk');
        
        const {email, password} = req.body
        User.findOne({email : email})
        .then((userLogin) => {
            let result =  bcrypt.compareSync(password, userLogin.password);
           if(result){
               let token = jwt.sign({
                   id: userLogin.id,
                   username: userLogin.username,
                   email: userLogin.email,
               },'secret-key')
               
               res.status(200).json({
                   msg:'login succes',
                   token,
                   role: userLogin.role
                })
           }else{
               res.status(500).json({
                   msg: 'username/ password wrong'
               })
           }
        })
        .catch((err) => {
            res.status(500).json({
                msg: 'username/ password wrong'
            })
        });
    }

};
