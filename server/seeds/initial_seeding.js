
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('reddit-posts').del(),
    knex('reddit-comments').del(),
    knex('reddit-users').del(),

    // Inserts seed entries
    knex('reddit-posts')
      .insert({
        title: 'Awesome Post',
        content: 'The best content',
        date_time: '1234123412345',
        image_url: 'http://marketingland.com/wp-content/ml-loads/2014/08/content-marketing-question-ss-1920.jpg',
        votes: 100}),

    knex('reddit-posts')
      .insert({
        title: 'Bill F**king Murray',
        content: 'It\'s Bill Murray, what more can I say.',
        date_time: '1234123412345',
        image_url: 'http://www.fillmurray.com/600/400',
        votes: 1000}),

    knex('reddit-comments')
      .insert({
        post_id: 1,
        author: "Nate",
        content: "Best content"
      }),

    knex('reddit-comments')
      .insert({
        post_id: 2,
        author: "Cool Guy",
        content: "Caddy Shack yeah!"
      }),

    knex('reddit-comments')
      .insert({
        post_id: 2,
        author: "Wes Anderson",
        content: "He's in all of his movies"
      }),

    knex('reddit-users')
      .insert({
        email: "Nate",
        password: "Pass"
      })
  );
};
