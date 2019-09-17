const db = require('../data/dbConfig.js');

function find() {
  return db('companies').select('*');
}

function findById(id) {
  return db('companies').where({ id }).first();
}

const Company = {
  find,
  findById
};

module.exports = { Company };