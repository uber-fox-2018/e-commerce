const mongoose = require('mongoose');
const Schema = mongoose.Schema

const cartSchema = new Schema({
  userId : {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  itemId: {
    type: Schema.Types.ObjectId,
    ref: 'Item'
  },
  quantity: {
    type: Number
  },
  totalPrice: {
    type: Number
  },
  isSold: {
    type: Boolean,
    default: 'false'
  }
},{
  timestamps: true
})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart