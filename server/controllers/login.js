const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = {
  signup: (req, res) => {
    const { fullname, email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    User.create({
      fullname,
      email,
      password: hash
    })
      .then(user => {
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY);
        res.status(201).json({
          msg: "success",
          user,
          token
        });
      })
      .catch(err => res.status(500).json({ msg: err }));
  },

  signin: (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email })
      .then(user => {
        let isTrue = bcrypt.compareSync(password, user.password);
        if (isTrue) {
          let token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY);
          res.status(201).json({
            msg: "success to login",
            token,
            role: user.role
          });
        } else {
          res.status(400).json({
            mgs: "failed to login"
          });
        }
      })
      .catch(err => {
        res.status(400).json({
          msg: "check name and password"
        });
      });
  }
};
