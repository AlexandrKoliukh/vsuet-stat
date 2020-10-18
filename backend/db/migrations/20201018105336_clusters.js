exports.up = (knex) =>
  knex.schema.createTable('clusters', (table) => {
    table.increments('id').primary();
    table.string('name');
  });

exports.down = (knex) => knex.schema.dropTableIfExists('clusters');
