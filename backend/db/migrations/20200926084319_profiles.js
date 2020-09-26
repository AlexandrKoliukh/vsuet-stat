exports.up = (knex) =>
  knex.schema.createTable('profiles', (table) => {
    table.increments('id').primary();
    table
      .integer('teacher_id')
      .unsigned()
      .references('id')
      .inTable('teachers')
      .index();
    table
      .integer('subject_id')
      .unsigned()
      .references('id')
      .inTable('subjects')
      .index();
    table.integer('mark_qualification');
    table.integer('mark_storytelling');
    table.integer('mark_relevance');
    table.integer('mark_fun');
    table.integer('mark_usefulness');
    table.integer('mark_clearness');
    table.integer('mark_evaluation');
  });

exports.down = (knex) => knex.schema.dropTableIfExists('profiles');
