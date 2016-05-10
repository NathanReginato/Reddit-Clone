var express = require('express');
var router = express.Router();
var knex = require('../db/knexconfig.js')

/* GET users listing. */
router.get('/v1/posts', function(req, res, next) {
  knex('reddit-posts').then(function(posts){
    res.json(posts)
  })
});

module.exports = router;
