let jwt = require("jsonwebtoken");

const author = (req, res, next) => {
  let token = req.headers.token;
  if (token) {
    decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (decoded.role == "admin") {
      next();
    } else {
      res.status(401).json({ msg: "you are not authorized, admin only" });
    }
  }
};

module.exports = author;
