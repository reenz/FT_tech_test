const express = require('express');
const router = express.Router();
const knex = require("../db/server/knex.js");

/* GET rating listing. */
router.post('/', (req, res, next) => {
  const score = req.body.score;
  console.log(`User inputted score is ${score}`);
  if(score) {
    knex("rating").insert({rating: score}).then(() => {
      return res.render("ratings");
   });
  } else {
    return res.render("index", {"error_message": "Please provide a score"});
  }
});

module.exports = router;