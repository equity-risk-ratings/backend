const jwt = require("jsonwebtoken");
/**
 * @description verifies token
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns String
 */

const verifyToken = async (req, res, next) => {
  const token = req.get("Authorization");

  try {
    if (!token) {
      return res.status(401).json({
        message:
          "No token provided, token must be set on the Authorization Header"
      });
    }

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    return next();
  } catch (error) {
    return res.status(401).json({
      message: "Unable to verify token, Pls provide a valid token",
      error
    });
  }
};

module.exports = verifyToken;
