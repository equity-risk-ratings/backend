const models = require("../../models");

/**
 * @description Create new farmer
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */

const addCompany = async (req, res, next) => {
  try {
    const companyDetails = req.body;
    const company = companyDetails.company;

    const companyExist = await models.Company.findBy({ company });

    if (companyExist) {
      return res.status(409).json({
        message: "Company record exists already"
      });
    }

    const newCompany = await models.Company.add(companyDetails);

    return res.status(201).json({
      success: true,
      message: "New compnay created",
      newCompany
    });
  } catch (err) {
    return res.status(500).json({
      message: "Could not add new company"
    });
  }
};

module.exports = addCompany;
