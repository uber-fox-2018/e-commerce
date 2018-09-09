const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const TransactionSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'Users' } ,
  productId: { type: Schema.Types.ObjectId, ref: 'Products' }
});

const transaction = mongoose.model('Transactions', TransactionSchema);

module.exports = transaction