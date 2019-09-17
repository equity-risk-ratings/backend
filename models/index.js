require('dotenv').config();
const User = require('./user');
const Company = require('./company');

const models = { User, Company };

module.exports = { models };