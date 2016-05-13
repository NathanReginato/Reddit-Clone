var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var knex = require('../../db/knexconfig.js')
var jwt = require('jsonwebtoken')

router.post('/signup', function(req, res, next) {
  res.json({'stuff':'things'})
});


// function validate(req, next) {
//
//   const errors = [];
//
//   if (!req.body.email || !req.body.email.trim()) errors.push("Email can't be blank");
//   if (!req.body.password || !req.body.password.trim()) errors.push("Password can't be blank");
//
//   next();
// }

module.exports = router;
