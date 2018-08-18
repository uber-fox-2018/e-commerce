const Item = require('../models/item');


class ItemController {

    static addItem(req,res){
        Item.create({
            name : req.body.name,
            category : req.body.category,
            price : req.body.price,
            url : req.body.url
        })
        .then(dataItem=>{
            res.status(200).json(dataItem)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }

    static getItem(req,res){
        Item.find({})
        .then(data=>{   
            res.json(data)
        })
        
    }

    static sortItem(req,res){
        Item.find({
            category : req.params.category
        })
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
        
    }

    static editItem(req,res){
        Item.updateOne({
            _id : req.params.id
        },{
            name : req.body.name,
            category : req.body.category,
            price : req.body.price,
            url : req.body.url
        })
        .then(function(data){
            res.json(data)
        })
    }

    static deleteItem(req,res){
        Item.deleteOne({
            _id : req.params.id
        },function(err,data){
            res.json(data)
        })
    }

}

module.exports = ItemController