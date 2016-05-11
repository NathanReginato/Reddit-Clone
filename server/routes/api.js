var express = require('express');
var router = express.Router();
var knex = require('../db/knexconfig.js')


/* GET users listing. */
router.get('/v1/posts', function(req, res, next) {
  knex('reddit-posts').then(function(posts){
    return knex('reddit-comments').then(function(comments){
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

module.exports = router;
