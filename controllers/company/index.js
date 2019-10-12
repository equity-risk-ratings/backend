const { getAllCompanies, getCompanyById } = require("./getCompanies");
const addCompany = require("./addCompany");
const deleteCompany = require("./deleteCompany");
const updateCompany = require("./updateCompany");

module.exports = {
  getAllCompanies,
  getCompanyById,
  addCompany,
  deleteCompany,
  updateCompany
};
