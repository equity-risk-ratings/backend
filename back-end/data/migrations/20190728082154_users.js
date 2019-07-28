
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments();

    table
      .string('firstName', 28)
      .notNullable()
      .unique();

    table
      .string('lastName', 28)
      .notNullable()
      .unique();

    table
      .string('email', 128)
      .notNullable()
      .unique();

    table
      .string('password', 128)
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
