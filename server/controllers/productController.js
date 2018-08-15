const Product = require('../models/product')
const jwt = require('jsonwebtoken')

class ProductController {
  static uploadProduct(req, res){
    let {name, price, imgUrl, category} = req.body
    Product.create({
      name, price, imgUrl, category
    })
    .then(newProduct => {
      res.status(201).json(newProduct)
    })
    .catch(err => {
      res.status(400).json(err.message)
    })
  }

  static getAllProduct(req, res){
    Product.find({})
    .then(products => {
      res.status(201).json(products)
    })
    .catch(err => {
      res.status(400).json(err.message)
    })
  }
}

module.exports = ProductController