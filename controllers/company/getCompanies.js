const models = require("../../models");
/**
 * @description Get Companies
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */

const getAllCompanies = async (req, res, next) => {
  try {
    const companies = await models.Company.find();
    if (!companies.length) {
      return res.status(404).json({
        success: false,
        message: "Could not find any company in the record"
      });
    }
    return res.status(200).json({
      success: true,
      message: "Companies record found",
      totalNumberOfCompanies: companies.length,
      companies
    });
  } catch (err) {
    return res.status(500).json({
      message: "Could not retrieve companies",
      err
    });
  }
};

const getCompanyById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const company = await models.Company.findById(id);
    if (company) {
      return res.status(200).json({
        success: true,
        message: "Company record found",
        company
      });
    }
    return res.status(404).json({
      success: false,
      message: `Could not find company with the ${id}`
    });
  } catch (err) {
    return res.status(500).json({
      message: "Could not retrieve company",
      err
    });
  }
};

module.exports = {
  getAllCompanies,
  getCompanyById
};
