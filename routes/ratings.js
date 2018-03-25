const express = require('express');
const router = express.Router();
const knex = require("../db/server/knex.js");

/* GET rating listing. */
router.post('/', (req, res, next) => {
  const score = req.body["score"];
  knex("rating").insert({rating: score}).then((out) => {
    const msg = "Successfully inserted record for score " + score;
    console.log(msg);
  });
  res.render("ratings", {"msg": msg});
});

router.get('/', (req, res, next) => {
});

module.exports = router;