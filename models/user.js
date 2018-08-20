const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    email: {
        type: String,
        unique: true
    }, 
    password: {
        type: String
    }
}, {timestamps: true});

var User = mongoose.model('User', userSchema);

module.exports = User;