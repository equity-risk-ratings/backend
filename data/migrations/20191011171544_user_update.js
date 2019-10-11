exports.up = function(knex) {
  return knex.schema.createTable("users table", table => {
    table.increments();
    table.string("firstName", 28).notNullable();
    table.string("lastName", 28).notNullable();
    table
      .string("email", 128)
      .notNullable()
      .unique();
    table.string("password", 40).notNullable();
    table.string("role").defaultTo("admin");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
