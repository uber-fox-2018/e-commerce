const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name : {
        type : String,
        required : 'Name cannot be blank!'
    },
    description : {
        type : String,
    },
    price : {
        type : Number,
    },
    image : {
        type : String,
    },
}, {timestamps:true});


const Item = mongoose.model("Item", itemSchema);

module.exports = Item;