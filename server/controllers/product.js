const Product = require ('../models/product')

class productController {
  static addProduct (req,res) {
    Product.create ({
      name : req.body.name,
      description : req.body.description,
      imgUrl : req.file.cloudStoragePublicUrl,
      price : price,
      category : req.body.category
    })
      .then (createdProduct => {
        res.status (200)
          .json ({message : "successfully create new product", data : createdProduct})
      })
      .catch (err => {
        res.status (500)
          .json ({message : "unable to create product"})
      })
  }

  static editProduct (req,res) {
    const query = Product.where({
      _id: req.params.id
    })
    query.update(req.body)
      .then (updatedProduct => {
        if (updatedProduct.n == 0) {
          res.status(201)
            .json({ message: "no product found" , data : updatedProduct})
        } else {
          res.status(200)
            .json({ message: "update task succeed" , data : updatedProduct})
        }
      })
      .catch (err => {
        res.status (500)
          .json ({message : "unable to update product"})
      })
  }

  static deleteProduct (req,res) {
    Product.remove({
      _id : req.params.id
    })
      .then(function(product) {
        if (product.n == 0) {
          res.status(201)
            .json({ message: "no product found" })
        } else {
          res.status(200)
            .json({ message: "delete product succeed" })
        }
      })
      .catch(function(err) {
        res.status(500)
          .json({ message: "unable delete product" })
      })
  }

  static searchAllProduct (req,res) {
    Product.find ({
      name : new RegExp(req.query.name, 'i'),
      description : new RegExp(req.query.name, 'i')
    })
      .then(function(products) {
        res.status(200)
          .json({ message: "get products succeed" , data: products})

      })
      .catch(function(err) {
        res.status(500)
          .json({ message: "unable get products" })
      })
  }

  static searchByCategory (req,res) {
    Product.find ({
      name : new RegExp(req.query.name, 'i'),
      description : new RegExp(req.query.name, 'i'),
      category : req.query.category
    })
      .then(function(products) {
        res.status(200)
          .json({ message: "get products succeed" , data: products})

      })
      .catch(function(err) {
        res.status(500)
          .json({ message: "unable get products" })
      })
  }


  static getAllProduct (req,res) {
    Product.find ()
      .then(function(products) {
        res.status(200)
          .json({ message: "get products succeed" , data: products})

      })
      .catch(function(err) {
        res.status(500)
          .json({ message: "unable get products" })
      })
  }

  static getByCategory (req,res) {
    Product.find ({
      category : req.body.category
    })
      .then(function(products) {
        res.status(200)
          .json({ message: "get products succeed" , data: products})

      })
      .catch(function(err) {
        res.status(500)
          .json({ message: "unable get products" })
      })
  }

  static filterByPrice (req,res) {
    Product.find ({
      price : {$gt: req.query.min, $lt: req.query.max}
    })
      .then(function(products) {
        res.status(200)
          .json({ message: "get products succeed" , data: products})

      })
      .catch(function(err) {
        res.status(500)
          .json({ message: "unable get products" })
      })
  }
}

module.exports = productController