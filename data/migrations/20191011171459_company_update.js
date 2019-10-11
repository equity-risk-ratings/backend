exports.up = function(knex) {
  return knex.schema.createTable("companies update", table => {
    table.increments();
    table.string("company").notNullable();
    table.float("previous_closing_price");
    table.float("opening_price");
    table.float("high");
    table.float("low");
    table.float("close");
    table.float("change");
    table.integer("trades");
    table.integer("volume");
    table.float("value");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("companies");
};
