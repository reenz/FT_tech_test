var express = require('express');
var router = express.Router();

/* GET rating listing. */
router.post('/', function(req, res, next) {
  res.render("ratings");
});

module.exports = router;