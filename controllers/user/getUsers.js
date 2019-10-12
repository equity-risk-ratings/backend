const models = require("../../models");

/**
 * @description Get Users
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */

const getAllUsers = async (req, res, next) => {
  try {
    const users = await models.User.find();
    if (!users.length) {
      return res.status(404).json({
        success: false,
        message: "Could not find any user in the record"
      });
    }
    return res.status(200).json({
      success: true,
      message: "Users record found",
      totalNumberOfUsers: users.length,
      users
    });
  } catch (err) {
    return res.status(500).json({
      message: "Could not retrieve users",
      err
    });
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await models.User.findById(id);
    if (user) {
      return res.status(200).json({
        success: true,
        message: "User record found",
        user
      });
    }
    return res.status(404).json({
      success: false,
      message: `Could not find the user with the ${id}`
    });
  } catch (err) {
    return res.status(500).json({
      message: "Could not retrieve user",
      err
    });
  }
};

module.exports = {
  getAllUsers,
  getUserById
};
