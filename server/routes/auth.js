var express = require('express');
var router = express.Router();

router.post('/signup', function(req, res, next) {
  res.json({'stuff':'things'})
});

module.exports = router;
