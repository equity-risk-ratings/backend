const models = require("../../models");

const deleteCompany = async (req, res, next) => {
  try {
    const { id } = req.params;
    const company = await models.Company.findById(id);

    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company not found"
      });
    }
    const deletedCompany = await models.Company.remove(id);
    return res.status(200).json({
      success: true,
      message: "Company record deleted",
      deletedCompany
    });
  } catch (err) {
    return res.status(500).json({
      err,
      success: false,
      message: "Could not delete Company's record"
    });
  }
};

module.exports = deleteCompany;
