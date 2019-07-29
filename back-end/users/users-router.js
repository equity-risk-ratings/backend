const express = require('express');
const Users = require('./users-model.js');
const route = express.Router();

route.get('/', async (req, res) => {
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

module.exports = route;