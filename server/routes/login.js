const express = require("express");
const router = express.Router();

const { signup, signin } = require("../controllers/login");

router
  .post("/signup", signup)
  .post("/signin", signin)

module.exports = router;
