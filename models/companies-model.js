const db = require('../data/dbConfig.js');

module.exports = {
  find,
  findById
}

function find() {
  return db('companies').select('*');
}

function findById(id) {
  return db('companies').where({ id }).first();
}