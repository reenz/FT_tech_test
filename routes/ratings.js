var express = require('express');
var router = express.Router();

/* GET rating listing. */
router.get('/', function(req, res, next) {
  res.send('Ratings');
});

module.exports = router;
