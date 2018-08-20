const mongoose = require('mongoose')


const userSchema =  mongoose.Schema({
    name: String,
    email : {
        type: String,
        unique: true
    },
    password: String,
    role: {
        type: String,
        default: 'Customer'
    }    
},
{
    timestamps: true
})

const Users = mongoose.model("User", userSchema)

module.exports = Users