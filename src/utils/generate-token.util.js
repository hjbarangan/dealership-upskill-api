const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const { user_id } = user;
  const payload = {
    user_id,
  };
  const token = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
  return token;
};

module.exports = generateToken;
