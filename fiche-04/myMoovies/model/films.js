"use strict";
const { parse, serialize } = require("../utils/json");

const jsonDbPath = __dirname + "/../data/films.json";

const defaultFilms = [
    { 
        id: 1,
        title: "Spiderman", 
        duration: 121, 
        budget: 139000000,
        link:"https://fr.wikipedia.org/wiki/Spider-Man_(s%C3%A9rie_de_films)"
    },
    {
        id: 2,
        title: "Thor", 
        duration: 114,
        budget:150000000 ,
        link:"https://fr.wikipedia.org/wiki/Thor"
    },
  { 
        id: 3,
        title: "Avengers",
        duration:143 , 
        budget: 220000000 ,
        link:"https://fr.wikipedia.org/wiki/Avengers_(film)"
  },

];
class Films{
    constructor(dbPath=jsonDbPath,defaultItems=defaultFilms){
        this.jsonDbPath=dbPath;
        this.defaultFilms=defaultItems;
    }
    getNextId() {
      const films = parse(this.jsonDbPath, this.defaultFilms);
      let nextId;
      if (films.length === 0) nextId = 1;
      else nextId = films[films.length - 1].id + 1;
  
      return nextId;
    }
    /**
   * Returns all films
   * @returns {Array} Array of films
   */
  getAll() {
    const films = parse(this.jsonDbPath, this.defaultFilms);
    return films;
  }
    /**
   * Returns the films identified by id
   * @param {number} id - id of the film to find
   * @returns {object} the film found or undefined if the id does not lead to a film
   */
  getOne(id) {
    const films = parse(this.jsonDbPath, this.defaultFilms);
    const foundIndex = films.findIndex((film) => film.id == id);
    if (foundIndex < 0) return;

    return films[foundIndex];
  }
  
  addOne(body) {
    const films = parse(this.jsonDbPath, this.defaultFilms);

    // add new films
    const newFilm = {
      id: this.getNextId(),
      title: body.title,
      duration: body.duration,
      budget: body.budget,
      link: body.link,
    };
    films.push(newFilm);
    serialize(this.jsonDbPath, films);
    return newFilm;
  }

    /**
   * Delete a films in the DB and return the deleted films
   * @param {number} id - id of the film to be deleted
   * @returns {object} the film that was deleted or undefined if the delete operation failed
   */
     deleteOne(id) {
      const films = parse(this.jsonDbPath, this.defaultFilms);
      const foundIndex = films.findIndex((film) => film.id == id);
      if (foundIndex < 0) return;
      const itemRemoved = films.splice(foundIndex, 1);
      serialize(this.jsonDbPath, films);
  
      return itemRemoved[0];
    }
    
}
module.exports = { Films };