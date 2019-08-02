const router = require('express').Router();
const Companies = require('../models/companies-model.js');

const restricted = require('../middlewares/restricted-middleware.js');

router.get('/', restricted, async (req, res) => {
  try {
    const companies = await Companies.find();
    res.status(200).json(companies);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the users',
    });
  }
});

router.get('/:id', restricted, async (req, res) => {
  try {
    const company = await Companies.findById(req.params.id);

    if (company) {
      res.status(200).json(company);
    } else {
      res.status(404).json({ message: 'Company not found' });
    }
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: 'Error retrieving company'
    });
  }
});

module.exports = router;