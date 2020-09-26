exports.up = (knex) =>
  knex.schema.createTable('subjects', (table) => {
    table.increments('id').primary();
    table.string('name').unique();
    table
      .integer('teacher_id')
      .unsigned()
      .references('id')
      .inTable('teachers')
      .index();
  });

exports.down = (knex) => knex.schema.dropTableIfExists('subjects');
