const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  productList: [{
    type : Schema.Types.ObjectId,
    required : true,
    ref : "Product"
  }],
  status: {
    type : String,
    required : true,
    default : "open"
  }
}, {
  timestamps: true
})

const Order = mongoose.model('Order', orderSchema)
module.exports = Order