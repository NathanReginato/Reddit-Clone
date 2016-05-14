var express = require('express');
var router = express.Router();
var knex = require('../db/knexconfig.js')


/* GET users listing. */
router.get('/posts', function(req, res, next) {
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

router.post('/post', function(req, res, next) {
  knex('reddit-posts')
  .insert(req.body)
  .returning('*')
  .then(function(data) {
    res.send(data[0])
  })
});

router.post('/comment', function(req, res, next) {
  knex('reddit-comments')
  .insert(req.body)
  .returning('*')
  .then(function(data) {
    res.send(data[0])
  })
});

router.post('/comment/delete', function(req, res, next) {
  knex('reddit-comments')
  .where('id', req.body.id)
  .del()
  .returning('*')
  .then(function(data) {
    res.send(data[0])
  })
})

module.exports = router;
