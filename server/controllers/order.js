const Order = require ('../models/order')
const jwt = require ('jsonwebtoken')
require('dotenv').config()

class OrderController {
  static addtToOrder (req,res) {
    try {
      let decoded = jwt.verify(req.headers.token, process.env.JWT_KEY)
      //first, system will check if user already has open order or not, if yes then product will be added to that order
      //if not, system will create new order and add the product in new order
      Order.findOne({
        userId : decoded.id,
        status : "open"
      })
        .then (order => {
          if (order) {
            Order.update({
              userId : decoded.id,
              status : "open"
            },
              {
              $push: {productList : req.body.productId}
            })
             .then (updatedOrder => {
               res.status(200)
                .json({message : "successfully added product to order list", data : updatedOrder})
             })
             .catch (err => {
               res.status(500)
                .json({message : "failed update product to order list", err: err})
             })
          } else {
            Order.create ({
              userId : decoded.id,
              productList : req.body.productId
            })
              .then (createdOrder => {
                res.status(200)
                  .json({message : "successfully add product to order list", data : createdOrder})
              })
              .catch (err => {
                res.status(500)
                  .json({message : "failed add product to order list" , err: err})
              })
          }
        })
        .catch (err => {
          res.status(500)
            .json({message : "error find order list"})
        })
    } catch (err)  {
      res.status(500)
        .json({ message: "token wrong" , err : err})
    }
  }

  static removeProduct (req,res) {
    try {
      let decoded = jwt.verify(req.headers.token, process.env.JWT_KEY)
      Order.update({
        userId : decoded.id,
        status : "open"
      },
        {
        $pull: {productList : req.body.productId}
      })
      .then (updatedOrder => {
        res.status(200)
          .json({message : "successfully remove product to order list", data : updatedOrder})
      })
      .catch (err => {
        res.status(500)
          .json({message : "failed remove product to order list", err: err})
      })
    }
    catch (err)  {
      res.status(500)
        .json({ message: "token wrong" , err : err})
    }
  }

  static deleteOrder (req,res) {
    Order.remove({
      _id : req.params.id
    })
      .then (order => {
        res.status(200)
          .json({message : "success delete order"})
      })
      .catch (err => {
        res.status(500)
          .json({message : "failed delete order"})
      })
  }

  static checkOutOrder (req,res) {
    try {
      let decoded = jwt.verify(req.headers.token, process.env.JWT_KEY)
      Order.findOne({
        userId : decoded.id,
        _id : req.body.orderId,
        status : "open"
      })
        .then (order => {
          if (order) {
            Order.update({
              _id : req.body.orderId
            },
            {
              status : "checkout",
              // address : req.body.address
            })
            .then (updatedOrder => {
              console.log(updatedOrder)
              res.status(200)
               .json({message : "successfully check out order", data : updatedOrder})
            })
            .catch (err => {
              res.status(500)
               .json({message : "failed check out order"})
            })
          } else {
            res.status(500)
               .json({message : "order not found"})
          }
        })
        .catch (err => {
           res.json(500)
            .json ({message : "error find order"})
        })
    } catch (err) {
      res.status(500)
        .json({ message: "token wrong" })
    }
  }

  static completeOrder (req,res) {
      Order.findOne({
        _id : req.body.orderId,
        status : "checkout"
      })
        .then (order => {
          if (order) {
            Order.update({
              _id : req.body.orderId
            },{
              status : "completed"
            })
            .then (updatedOrder => {
              res.status(200)
               .json({message : "successfully complete order", data : updatedOrder})
            })
            .catch (err => {
              res.status(500)
               .json({message : "failed complete order"})
            })
          } else {
            res.status(500)
               .json({message : "order not found"})
          }
        })
        .catch (err => {
           res.json(500)
            .json ({message : "error find order"})
        })
  }

  static showOpenOrders (req,res) {
    try {
      let decoded = jwt.verify(req.headers.token, process.env.JWT_KEY)
      Order.find({
        userId : decoded.id,
        status : "open"
      })
        .populate('userId')
        .populate('productList')
        .then (orders => {
          res.status(200)
          .json({message : "successfully get open orders", data : orders})
        })
        .catch (err => {
           res.json(500)
            .json ({message : "error find order"})
        })
    } catch (err) {
      res.status(500)
        .json({ message: "token wrong" })
    }
  }

  static showPendingOrders (req,res) {
    try {
      let decoded = jwt.verify(req.headers.token, process.env.JWT_KEY)
      Order.find({
        userId : decoded.id,
        status : "checkout"
      })
        .populate('userId')
        .populate('productList')
        .then (orders => {
          res.status(200)
          .json({message : "successfully get pending orders", data : orders})
        })
        .catch (err => {
           res.json(500)
            .json ({message : "error find order"})
        })
    } catch (err) {
      res.status(500)
        .json({ message: "token wrong" })
    }
  }

  static showCompleteOrders (req,res) {
    try {
      let decoded = jwt.verify(req.headers.token, process.env.JWT_KEY)
      Order.find({
        userId : decoded.id,
        status : "completed"
      })
        .populate('userId')
        .populate('productList')
        .then (orders => {
          res.status(200)
          .json({message : "successfully get complete orders", data : orders})
        })
        .catch (err => {
           res.json(500)
            .json ({message : "error find order"})
        })
    } catch (err) {
      res.status(500)
        .json({ message: "token wrong" })
    }
  }
}

module.exports = OrderController