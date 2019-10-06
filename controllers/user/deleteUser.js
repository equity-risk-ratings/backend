const models = require("../../models");

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await models.User.findById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }
    const deletedUser = await models.User.remove(id);
    return res.status(200).json({
      success: true,
      message: "User record deleted",
      deletedUser
    });
  } catch (err) {
    return res.status(500).json({
      err,
      success: false,
      message: "Could not delete User's record"
    });
  }
};

module.exports = deleteUser;
