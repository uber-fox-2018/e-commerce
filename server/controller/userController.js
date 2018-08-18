const user = require('../models/user.js')
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const saltRounds = 10;
var axios = require('axios');

class Controller{

    static register(req,res){
        var salt = bcrypt.genSaltSync(saltRounds);
        var hash = bcrypt.hashSync(req.body.password, salt);
        user.findOne({
            email:req.body.email
        })
        .then(function(mail){
            if(!mail){
                user.create({
                    name : req.body.name,
                    email : req.body.email,
                    password : hash
                })
                .then(function(dataUser){
                    var token = jwt.sign({id:dataUser._id,name:dataUser.name,email:dataUser.email},process.env.secretKey)
                    res.status(200).json({
                        dataUser,token
                    })
                })
                .catch((err)=>{
                    res.json(err)
                    console.log(err)
                })
            }else{
                res.json("account sudah ada")
            }
        })  
     
    }

    static authentication(req,res,next){
        var decoded = jwt.verify(req.headers.token, process.env.secretKey)
        // console.log("===============",decoded)
        if(decoded){
            next()
        }else{
            res.status(400).json('error')
        }
    }

    static login(req,res){
        user.findOne({
            email : req.body.email
        })
        .then(function(dataUser){
            if(dataUser){
                let checkPassword = bcrypt.compareSync(req.body.password, dataUser.password)
                var token = jwt.sign({id:dataUser._id,name:dataUser.name,email:dataUser.email},process.env.secretKey)
                if(checkPassword){
                    // res.json(dataUser)
                    res.json({dataUser,token})
                }else{
                    res.json(false)
                }
            }else{
                res.json('empty')
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    static getDataFb(req,res){
        console.log(req.body.data.tokenFb)
        let tokenfb = req.body.data.tokenFb
        let url =`https://graph.facebook.com/me?fields=id,name,email&access_token${tokenfb}`
        axios.get(url)
        .then(data=>{
            user.findOne({
                email : data.data.email
            })
            .then(function(dataFb){
                if(dataFb){
                    console.log(dataFb)
                    var token = jwt.sign({id:dataFb._id,name:dataFb.name,email:dataFb.email},process.env.secretKey)
                    res.status(200).json({token,email :dataFb.email})
                }else{
                   
                    user.create({
                        name : response.name,
                        email : response.email,
                        password : response.id
                    })
                    .then(function(data){
                        var token = jwt.sign({id:data._id,name:data.name,email:data.email},process.env.secretKey)
                        res.status(200).json({
                            data,token
                        })
                        console.log(token)
                    })
                    .catch((err)=>{
                        console.log(err)
                        res.status(500).json({ error: err})
                    })
                }
            })
            .catch(err=>{
                console.log(err)
                res.status(500).json({ error: err})
            })
        })
    }
}

module.exports = Controller