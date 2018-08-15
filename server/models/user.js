const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = new Schema(
  {
    username: {
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

userSchema.pre("save", function(next) {
  var user = this;
  if (!user.isModified("password")) return next();
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

var User = mongoose.model("User", userSchema);

module.exports = User;
