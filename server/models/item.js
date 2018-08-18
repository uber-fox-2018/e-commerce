const mongoose = require('mongoose');
const Schema = mongoose.Schema

const schemaItem = new Schema({
    name : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    url : {
        type : String,
        required : true
    }  
})

const Item = mongoose.model('Item', schemaItem);

module.exports = Item