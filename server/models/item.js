var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
    artist: {
        type: String,
        require: true
    },
    productName: {
        type: String,
        require: true
    },
    img: {
        type: String,
    },
    type: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    }
}, {
    timestamps: true
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item
