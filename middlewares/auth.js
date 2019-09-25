const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_SECRET;

const generateToken = (user) => {
  const payload = {
    subject: user.id,
    username: user.id,
    email: user.email
  };
  const options = {
    expiresIn: '7d'
  };
  const token = jwt.sign(payload, jwtKey, options);
  return token;
};

module.exports = generateToken;
