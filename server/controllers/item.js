const Item = require('../models/item');

module.exports = {
    addItem: (req, res) =>{
        const {name, stock, price, description, image, category} = req.body
        Item.create({
            name : name,
            stock : stock,
            price: price,
            description : description,
            image : image,
            category: category
        })
        .then((result) => {
            res.status(201).json({
                msg:'item inserted'
            })
        })
        .catch((err) => {
            res.status(500).json({
                msg:'item insert failed'
            })
        });
    },

    updateItem:(req, res) =>{
        const {name, stock, price, description, image, category} = req.body
        Item.findOne({_id : req.params.id})
        .then((result) => {
            
            Item.updateOne({_id: req.params.id}, {
                name: name || result.name,
                stock: stock || result.stock,
                price: price || result.price,
                description : description || result.description,
                image : image || result.image,
                category : category || result.category
            })
            .then((updated) => {
                res.status(201).json({
                    msg: 'item updated'
                })
            })
            .catch((err) => {
                res.status(500).json({
                    err
                })
            });

        })
        .catch((err) => {
            res.status(500).json({
                err
            })
        });
    },

    getItem:(req, res) =>{
        Item.find()
        .then((result) => {
            res.status(200).json({
                result
            })
        })
        .catch((err) => {
            res.status(500).json({
                err
            })
        });
    },

    deleteItem: (req, res) =>{
        Item.deleteOne({ _id : req.params.id})
        .then((result) => {
            res.status(200).json({
                msg: 'data deleted'
            })
        })
        .catch((err) => {
            res.status(500).json({
                err
            })
        });
    }
};
