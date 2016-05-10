var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/v1/posts', function(req, res, next) {
  res.json({stuff:'things'})
});

module.exports = router;
