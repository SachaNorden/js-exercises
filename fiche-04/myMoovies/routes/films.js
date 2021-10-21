var express = require("express");
var router = express.Router();

/* GET films listing. */
router.get("/", function (req, res) {
  console.log("GET /films?minimum-duration=value");
  return res.json(FILMS.getAll({ order: req.query.order}));
});

router.post("/", function (req, res, next) {
  if (!req.body || !req.body.title || !req.body.duration || !req.body.budget)
    return res.sendStatus(400);
  const newFilm = {
    id: FILMS.length + 1,
    title: req.body.title,
    duration: req.body.duration,
    budget: req.body.budget,
  };
  FILMS.push(newFilm);
  return res.json(newFilm);
});

module.exports = router;
