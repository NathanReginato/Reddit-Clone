var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var knex = require('../../db/knexconfig.js');
var validate = require('./form-validation.js');

router.post('/login', validate.form, function(req, res, next) {
  console.log(req.body);
  // fetchUser(req, res, next)
});

module.exports = router;
