exports.up = (knex) =>
  knex.schema.table('subjects', (table) => {
    table
      .integer('cluster_id')
      .unsigned()
      .references('id')
      .inTable('clusters')
      .index();
  });

exports.down = (knex) =>
  knex.schema.table('subjects', (table) => {
    table.dropColumn('cluster_id');
  });
