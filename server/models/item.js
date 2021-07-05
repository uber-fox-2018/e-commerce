const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const itemSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "title required"]
    },
    desc: {
      type: String
    },
    category: {
      type: String,
      required: [true, "category required"]
    },
    quantity: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      default: 0
    },
    image: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

var Item = mongoose.model("Item", itemSchema);

module.exports = Item;
