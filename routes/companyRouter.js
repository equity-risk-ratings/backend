const express = require("express");
const companyController = require("../controllers/company/");
const verifyToken = require("../middlewares/verifyToken");

const companyRouter = express.Router();

companyRouter.post("/company", companyController.addCompany);

companyRouter.get("/company", verifyToken, companyController.getAllCompanies);
companyRouter.get(
  "/company/:id",
  verifyToken,
  companyController.getCompanyById
);

companyRouter.delete(
  "/company/:id",
  verifyToken,
  companyController.deleteCompany
);

companyRouter.put("/company/:id", verifyToken, companyController.updateCompany);

module.exports = companyRouter;
