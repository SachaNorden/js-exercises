var express = require("express");
const { Films } = require("../model/films");
var router = express.Router();
const filmsModel = new Films();

/* GET films listing. */
router.get("/", function (req, res) {
  console.log("GET /films?minimum-duration=value");
  return res.json(filmsModel.getAll({ order: req.query.order}));
});

// GET /films/{id} : Get a films from its id in the menu
router.get("/:id", function (req, res) {
  console.log(`GET /films/${req.params.id}`);

  const films = filmsModel.getOne(req.params.id);
  // Send an error code '404 Not Found' if the films was not found
  if (!films) return res.status(404).end();

  return res.json(films);
});

//POST /films : get a films 
router.post("/",function(req,res){

  console.log(`POST/films/${req.params.id}`);

  const films =filmsModel.addOne(req.body);
})

module.exports = router;
