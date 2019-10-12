const models = require("../../models");

const updateCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    company = await models.Company.findById(id);
    if (!company) {
      return res.status(500).json({
        success: false,
        message: "Company not found"
      });
    }
    const updatedCompany = await models.Company.update(changes, id);
    return res.status(200).json({
      success: true,
      message: "Company record updated successfully",
      updatedCompany
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      err
    });
  }
};

module.exports = updateCompany;
