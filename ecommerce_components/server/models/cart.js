const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    name : {
        type : String,
        required : 'Name cannot be blank!'
    },
    qty : {
        type :Number,
    },
    price : {
        type : Number,
    },
    totalPrice : {
        type : Number,
    },
}, {timestamps:true});


const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;