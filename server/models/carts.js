const mongoose = require('mongoose');
const Schema = mongoose.Schema

let chartSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    qty : Number,
    items : Array
})

let Chart = mongoose.model('Chart',chartSchema)
module.exports = Chart