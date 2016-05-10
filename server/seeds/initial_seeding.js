
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('reddit-posts').del(),

    // Inserts seed entries
    knex('reddit-posts').insert({title: 'Awesome Post', content: 'The best content', date_time: '1234123412345', image_url: 'http://marketingland.com/wp-content/ml-loads/2014/08/content-marketing-question-ss-1920.jpg', votes: 100})
  );
};
