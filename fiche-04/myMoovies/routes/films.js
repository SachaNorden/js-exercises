var express = require("express");
var router = express.Router();
const FILMS = [
  { id: 1, title: "Spiderman", duration: 121, budget: 139000000,link:"https://fr.wikipedia.org/wiki/Spider-Man_(s%C3%A9rie_de_films)" },
  { id: 2, title: "Thor", duration: 114, budget:150000000 ,link:"https://fr.wikipedia.org/wiki/Thor"},
  { id: 3, title: "Avengers", duration:143 , budget: 220000000 ,link:"https://fr.wikipedia.org/wiki/Avengers_(film)"},
];
/* GET users listing. */
router.get("/", function (req, res, next) {
  return res.json(FILMS);
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
