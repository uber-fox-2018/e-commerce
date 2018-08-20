const Item = require('../models/modelItem')

module.exports = {
    addItem: (req, res) => {
        let newItem = req.body
        Item.create(newItem)
        .then(item => {
            res.status(201).json({
                message: 'Success',
                data: item
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'fail',
                err: err.message
            })
        })
    },
    getAllItem: (req, res) => {
        Item.find({})
        .then(items => {
            res.status(200).json({
                message: 'success',
                data: items
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'fail',
                err: err.message
            })
        })
    },

    removeItem: (req, res) => {
        let id = {
            _id: req.params.id
        }
        Item.remove(id)
        .then(() => {
            res.status(201).json({
                message: 'data has been deleted',
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Fail', 
                err: err.message
            })
        })
    },

    editItem: (req, res) => {
        let id = {
            _id: req.params.id
        }
        Item.findOne(id)
        .then(item => {
            let updateItem = {
                name: req.body.name || item.name,
                category: req.body.category || item.category,
                description: req.body.description || item.description,
                price: req.body.price || item.price,
                qty: req.body.qty || item.qty,
                img: req.body.img || item.img
            }
            Item.updateOne(id, {$set: updateItem})
            .then(() => {
                res.status(201).json({
                    message: `success to update ${updateItem}`,
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: 'failed to update',
                    err: err.message
                })
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'failed',
                err: err.message
            })
        })
    }
}