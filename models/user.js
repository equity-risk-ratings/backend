const db = require('../data/dbConfig.js');

function find() {
  return db('users').select('id', 'firstName', 'lastName', 'email', 'password');
}

function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function findById(id) {
  return db('users').where({ id }).first();
}

async function remove(id) {
  const removed = await findById(id);

  await db('users').where({ id }).del();

  return removed;
}

async function update(id, changes) {
  await db('users').where({ id }).update(changes, '*');

  return findById(id);
}

const User = {
  add,
  find,
  findBy,
  findById,
  update,
  remove
};

module.exports = { User };
