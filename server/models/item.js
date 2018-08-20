const mongoose = require('mongoose');
const Schema = mongoose.Schema

let itemSchema = new Schema({
    name: {type: String, required : true},
    stock: {type: Number, required : true},
    price: {type: Number, required : true},
    description: {type : String, default : '-'},
    image : String,
    category : String
})

let Item = mongoose.model('Item',itemSchema)
module.exports = Item