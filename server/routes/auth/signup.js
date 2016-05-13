var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var knex = require('../../db/knexconfig.js')
var jwt = require('jsonwebtoken')

router.post('/signup', validate, function(req, res, next) {
  insertUser(req, res, next)
});


function validate(req, res, next) {
  const errors = [];
  if (!req.body.email || !req.body.email.trim()) errors.push("Email can't be blank");
  if (!req.body.password || !req.body.password.trim()) errors.push("Password can't be blank");

  if (errors.length) {
    res.status(422).json({
      errors: errors
    })
  } else {
    next();
  }
}

function insertUser(req, res, next) {
  knex('reddit-users')
    .whereRaw('lower(email) = ?', req.body.email.toLowerCase())
    .count()
    .first()
    .then(function(result){
    })
}
module.exports = router;
