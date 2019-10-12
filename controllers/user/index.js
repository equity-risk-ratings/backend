const register = require("./register");
const login = require("./login");
const { getAllUsers, getUserById } = require("./getUsers");
const updateUser = require("./updateUser");
const deleteUser = require("./deleteUser");

module.exports = {
  register,
  login,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};
