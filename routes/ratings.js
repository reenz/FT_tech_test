const express = require('express');
const router = express.Router();
const knex = require("../db/server/knex.js");

/* GET rating listing. */
router.post('/', (req, res, next) => {
  const score = req.body["score"];
  knex("rating").insert({rating: score}).then(() => {
     res.render("ratings");
  });
});

module.exports = router;