
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reddit-posts', function (table) {
    table.increments();
    table.string('title');
    table.string('content');
    table.string('date_time');
    table.string('image_url');
    table.integer('votes');
  })

  .createTable('reddit-comments', function (table) {
    table.increments();
    table.integer('post_id')
    table.string('author');
    table.string('content');
  })

  .createTable('reddit-users', function (table) {
    table.increments();
    table.string('email');
    table.string('password');
  })
};



exports.down = function(knex, Promise) {
  return knex.schema
  .dropTable('reddit-posts')
  .dropTable('reddit-comments')
};
