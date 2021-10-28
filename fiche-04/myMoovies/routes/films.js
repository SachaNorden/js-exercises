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
  console.log(`POST/films/`);
  if (
    !req.body ||
    (req.body.hasOwnProperty("title") && req.body.title.length === 0) ||
    ((req.body.hasOwnProperty("content") && req.body.content.length === 0))||
    (req.body.duration <=60)||
    (req.body.budget<=10000)||
    (req.body.hasOwnProperty("link")&& req.body.link.length===0)

  )
  return res.status(400).end();

  const films =filmsModel.addOne(req.body);
  return res.json(films);
})


//DELETE /films : delete a films 
router.delete("/:id",function(req,res){
  console.log(`DELETE/films/${req.params.id}`); 


  const film = filmsModel.deleteOne(req.params.id);
  // Send an error code '404 Not Found' if the film was not found
  if (!film) return res.status(404).end();
  return res.json(film);
})


//PUT /films : PUT a film
router.put("/:id",function(req,res){
  console.log(`PUT/films/${req.params.id}`); 

  // Send an error code '400 bad request' bad request
  if (!req.body) return res.status(400).end();
  console.log("1");
  if (req.body.id !== parseInt(req.params.id)) return res.status(400).end();
  console.log("2");
  if (!req.body.title) return res.status(400).end();
  console.log("3");
  if (!req.body.link) return res.status(400).end();
  console.log("4");
  if (!req.body.duration) return res.status(400).end();
  

  const film = filmsModel.putOne(req.params.id, req.body);
  // Send an error code '404 Not Found' if the film was not found
  if (!film) return res.status(404).end();

  return res.json(film)
})
module.exports = router;
