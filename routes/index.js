const router = require('express').Router();
const user = require('./userRouter');
const company = require('./companyRouter');

router.use(user);
router.use(company);

module.exports = router;
