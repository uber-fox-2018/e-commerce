const express = require("express");
const router = express.Router();
const isLogin = require("../helpers/isLogin");
const auth = require("../helpers/auth");

const {
  listItems,
  createItem,
  deleteItem,
  editItem
} = require("../controllers/home");

router
  .get("/listItems", listItems)
  .post("/createItem", isLogin, auth, createItem)
  .delete("/deleteItem/:id", isLogin, auth, deleteItem)
  .put("/editItem/:id", isLogin, auth, editItem);
module.exports = router;
