const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
  name: String,
  price: Number,
  category: String,
  imgUrl: String,
  qty: {
    type: Number,
    default: 1
  }
});

const product = mongoose.model('Products', ProductSchema);

module.exports = product