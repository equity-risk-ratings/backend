const bcrypt = require('bcryptjs');
const { models } = require('../../models');
const { createError, GENERIC_ERROR } = require('../../helpers/error');

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
    userDetails.userName = userDetails.userName.toLowerCase();

    const user = await models.User.add(userDetails);

    return res.status(201).json({
      success: true,
      message: 'New user created',
      user
    });
  } catch (err) {
    return next(createError({
      message: 'Internal Server Error',
      status: GENERIC_ERROR
    })
    );
  }
};

module.exports = register;
