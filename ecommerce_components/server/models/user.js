const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true,
    },
    email : {
        type: String,
        unique: true,
        required : true
    },
    password : {
        type: String
    },
    role : {
        type: String,
        default: "user"
    },
    items : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Item"
    }]
}, {timestamps:true});


const User = mongoose.model('User', userSchema);

module.exports = User;