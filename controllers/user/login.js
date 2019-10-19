const bcrypt = require("bcryptjs");
const models = require("../../models");
const generateToken = require("../../middlewares/generateToken");

/**
 * @description Login user
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */

const login = async (req, res, next) => {
  try {
    const { password } = req.body;
    const { email } = req.body;
    const user = await models.User.findBy({ email });
    if (!password || !email) {
      return res.status(400).json({
        success: false,
        message: "Missing credentials"
      });
    } else {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        return res.status(201).json({
          success: true,
          message: "User is logged in",
          user,
          token
        });
      }
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      err
    });
  }
};

module.exports = login;
