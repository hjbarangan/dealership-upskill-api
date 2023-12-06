const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

function authMiddleware(req, res, next) {
  const token = req.header("Authorization");
  if (!token)
    return res.status(401).send({ auth: false, message: "No token provided." });

  jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
    if (err)
      return res
        .status(400)
        .send({ auth: false, message: "Failed to authenticate token." });
    req.user = decoded.user;
    next();
  });
}

module.exports = authMiddleware;
