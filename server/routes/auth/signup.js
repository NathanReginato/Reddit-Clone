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
      if (result.count === "0") {
        const saltRounds = 4;
        const passwordHash = bcrypt.hashSync(req.body.password, saltRounds)
        knex('reddit-users').insert({
            email: req.body.email,
            password: passwordHash
          })
          .returning('*')
          .then(function (users) {
            const user = users[0]
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET)

              res.status(200).json({
                id: user.id,
                email: user.email,
                token: token
              })
          })
        } else {
          res.status(422).json({
            errors: ["Email has already been taken"]
          })
        }
      })
}

module.exports = router;
