const db = require("../data/dbConfig.js");

function find() {
  return db("companies").select("*");
}

function findById(id) {
  return db("companies")
    .where({ id })
    .first();
}

function findBy(filter) {
  return db("companies")
    .where(filter)
    .first();
}

async function add(company) {
  const [id] = await db("companies").insert(company);

  return findById(id);
}

async function remove(id) {
  const removed = await findById(id);

  await db("companies")
    .where({ id })
    .del();

  return removed;
}

async function update(changes, id) {
  await db("companies")
    .where({ id })
    .update(changes);
}
module.exports = {
  find,
  findBy,
  findById,
  add,
  update,
  remove
};
