const Item = require('../models/item')

const getItem = (req, res) => {
    Item.find({}) 
    .then((data) => {
        res.status(200).json({
            message: `get item list`,
            data
        })
    })
    .catch((err) => {
        res.status(400).json({
            message: err.message
        })
    })
}

const addItem = (req, res) => {
    const { artist, productName, img, type, price } = req.body
    Item.create({
        artist: artist,
        productName: productName,
        img: img,
        type: type,
        price: price
    })
    .then((data) => {
        res.status(200).json({
            message: `success add item`,
            data
        })
    })
    .catch((err) => {
        res.status(400).json({
            message: err.message
        })
    })
}

const deleteItem = (req, res) => {
    Item.deleteOne({ _id: req.params.id })
    .then(() => {
        message: `success delete item`
    })
    .catch((err) => {
        message: err.message
    })
}

module.exports = {
    getItem,
    addItem,
    deleteItem
}