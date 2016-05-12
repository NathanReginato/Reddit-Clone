var express = require('express');
var router = express.Router();
var knex = require('../db/knexconfig.js')


/* GET users listing. */
router.get('/v1/posts', function(req, res, next) {
  knex('reddit-posts')
  .then(function(posts){
    return knex('reddit-comments')
    .then(function(comments){
      var postObject = [];
      posts.forEach(function(post){
        var pTemp;
        var cTemp = [];
        pTemp = post;
        comments.forEach(function(comment){
          if (comment.post_id === post.id) {
            cTemp.push(comment);
          };
        });
        postObject.push({'post':pTemp, 'comment':cTemp});
      });
      res.json(postObject);
    });
  });
});

router.post('/v1/post', function(req, res, next) {
  knex('reddit-posts')
  .insert(req.body)
  .returning('*')
  .then(function(data) {
    res.send(data[0])
  })
});

router.post('/v1/comment', function(req, res, next) {
  knex('reddit-comments')
  .insert(req.body)
  .returning('*')
  .then(function(data) {
    res.send(data[0])
  })
});

module.exports = router;
