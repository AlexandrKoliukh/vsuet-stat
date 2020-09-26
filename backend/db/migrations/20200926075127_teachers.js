exports.up = (knex) =>
  knex.schema.createTable('teachers', (table) => {
    table.increments('id').primary();
    table.string('first_name');
    table.string('second_name');
    table.string('middle_name');
  });

exports.down = (knex) => knex.schema.dropTableIfExists('teachers');
