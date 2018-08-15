const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const adminSchema = new Schema(
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
      default: "admin"
    }
  },
  {
    timestamps: true
  }
);

adminSchema.pre("save", function(next) {
  var admin = this;
  if (!admin.isModified("password")) return next();
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(admin.password, salt, function(err, hash) {
      if (err) return next(err);
      admin.password = hash;
      next();
    });
  });
});

var Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
