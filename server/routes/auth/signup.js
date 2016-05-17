var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var knex = require('../../db/knexconfig.js');
var validate = require('./form-validation.js');


router.post('/signup', validate.form, function(req, res, next) {
  insertUser(req, res, next)
});

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
