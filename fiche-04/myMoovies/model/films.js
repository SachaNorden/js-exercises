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
    
}
module.exports = { Films };