var express = require('express');
var router = express.Router();
var knex = require('../db/knexconfig.js')

/* GET users listing. */
router.get('/v1/posts', function(req, res, next) {
  knex('reddit-posts').then(function(posts){
    res.json(posts)
  })
});

router.get('/v1/comment', function(req, res, next) {
  knex('reddit-comments').then(function(comments){
    res.json(comments)
  })
});

module.exports = router;
