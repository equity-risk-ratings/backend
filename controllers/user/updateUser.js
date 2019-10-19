const models = require("../../models");
const bcrypt = require("bcryptjs");

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    let changes = req.body;

    if (changes.password) {
      const hash = bcrypt.hashSync(changes.password, 10);
      changes.password = hash;
    }

    const updatedUser = await models.User.update(changes, id);
    return res.status(200).json({
      success: true,
      message: "User record updated successfully",
      updatedUser
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      err
    });
  }
};

module.exports = updateUser;
