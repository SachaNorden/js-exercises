var express = require("express");
var router = express.Router();

const ALBUMS = [
  { id: 1, title: "Unplugged", artist: "Nivana", year: 1751 },
  { id: 2, title: "Thriller", artist: "michael-jackson", year: 2000 },
];

/* GET users listing. */
router.get("/", function (req, res, next) {
  return res.json(ALBUMS);
});
router.post("/", function (req, res, next) {
  if (!req.body || !req.body.title || !req.body.artist || !req.body.year)
    return res.sendStatus(400);
  const newAlbum = {
    id: ALBUMS.length + 1,
    title: req.body.title,
    artist: req.body.artist,
    year: req.body.year,
  };
  ALBUMS.push(newAlbum);
  return res.json(newAlbum);
});

module.exports = router;
