const bcrypt = require("bcryptjs");
const models = require("../../models");
/**
 * @description Create new user
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */

const register = async (req, res, next) => {
  try {
    const userDetails = req.body;
    const salt = bcrypt.genSaltSync(10);

    userDetails.password = bcrypt.hashSync(userDetails.password, salt);
    const user = await models.User.add(userDetails);

    return res.status(201).json({
      success: true,
      message: "New user created",
      user
    });
  } catch (err) {
    return res.status(500).json({
      message: "Could not create a new user"
    });
  }
};

module.exports = register;
