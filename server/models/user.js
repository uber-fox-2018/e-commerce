const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: [true, "username required"]
    },
    email: {
      type: String,
      required: [true, "Please input your Email"],
      unique: [true, "email already registered please input another"]
    },
    password: {
      type: String,
      required: [true, "please input your password"]
    },

    address: {
      type: String,
      // required: [true, "please input your address"]
    },
    deposit: {
      type: Number,
      default: 0
    },
    
    role: {
      type: String,
      default: "user"
    }
  },
  {
    timestamps: true
  }
);



var User = mongoose.model("User", userSchema);

module.exports = User;
