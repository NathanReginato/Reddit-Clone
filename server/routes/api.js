var express = require('express');
var router = express.Router();
var knex = require('../db/knexconfig.js')
var jwt = require('jsonwebtoken')

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

router.post('/post', authorization, function(req, res, next) {
  const post_insert = req.body
  post_insert.user_id = req.user_id
  knex('reddit-posts')
  .insert(post_insert)
  .returning('*')
  .then(function(data) {
    res.send(data[0])
  })
});

router.post('/comment', authorization, function(req, res, next) {
  const comment_insert = req.body
  comment_insert.user_id = req.user_id
  knex('reddit-comments')
  .insert(comment_insert)
  .returning('*')
  .then(function(data) {
    res.send(data[0])
  })
});

router.post('/comment/delete', authorization, function(req, res, next) {
  if (req.body.id) {
    knex('reddit-comments')
    .where('id', req.body.id)
    .first()
    .then(function(comment){
      if (comment.user_id === req.user_id) {
        knex('reddit-comments')
          .where('id', req.body.id)
          .del()
          .returning('*')
          .then(function(data) {
            res.json(data)
          })
      }
    })
  }
})

router.post('/post/delete', authorization, function(req, res, next) {
  if (req.body.id) {
    knex('reddit-posts')
    .where('id', req.body.id)
    .first()
    .then(function(post){
      if (post.user_id === req.user_id) {
        knex('reddit-posts')
          .where('id', req.body.id)
          .del()
          .returning('*')
          .then(function(postDeleted) {
            knex('reddit-comments')
              .where('post_id', postDeleted[0].id)
              .del()
              .returning('*')
              .then(function(comments) {
                res.json(postDeleted[0])
              })
          })
      }
    })
  }
})

function authorization(req, res, next) {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user_id = payload.id;

    next()

  } else {
    res.status(403).json({
      error: "No token"
    })
  }
}
module.exports = router;
