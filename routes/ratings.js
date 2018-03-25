const express = require('express');
const router = express.Router();
const knex = require("../db/server/knex.js");

/* GET rating listing. */
router.post('/', (req, res, next) => {
  const score = req.body.score;
  console.log(`User inputted score is ${score}`);
  if (score && score > 0 && score < 5) {
    knex("rating").insert({ rating: score }).then(() => {
      return res.render("ratings");
    });
  } else {
    return res.render("index", { "error_message": "Please provide a valid score from 1 to 4" });
  }
});

router.get('/', (req, res, next) => {
  knex("rating").select("rating").count().groupBy("rating").then((rows) => {
    const ratings = rows.map(row => {
      return row.rating;
    });
    const counts = rows.map(row => {
      return Number.parseInt(row.count, 10);
    });
    const data = { "ratings": ratings, "counts": counts };
    return res.render("all_ratings", data);
  });
});


module.exports = router;