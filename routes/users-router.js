const router = require('express').Router();
const Users = require('../models/users-model.js');

router.get('/', async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the users',
    });
  }
});



module.exports = router;