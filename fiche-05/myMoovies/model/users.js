"use strict";
const jwt = require ("jsonwebtoken");
const { parse, serialize } =require("../utils/json");

const jwtSecret = "mypassword!";
const LIFETIME_JWT = 24*60*60*1000;// in ms : 24 * 60 * 60 * 1000 = 24h
const jsonDbPath = __dirname + "/../data/users.json";

// Default data
const defaultItems = [
    {
      username: "admin",
      password: "admin",
    },
];
class Users{
    constructor(dbPath = jsonDbPath, items = defaultItems) {
        this.jsonDbPath = dbPath;
        this.defaultItems = items;
      }
    getNextId(){
        const items = parse (this.jsonDbPath,this.defaultItems);
        let nextId;
        if(items.length===0) nextId = 1; 
        else nextId =items[items.length - 1].id + 1;
        return nextId;
    }

    /**
   * Returns all items
   * @returns {Array} Array of items
   */
  getAll() {
    const items = parse(this.jsonDbPath, this.defaultItems);
    return items;
  }
  

  /**
   * Returns the user identified by id
   * @param {number} id - id of the user to find
   * @returns {object} the user found or undefined if the id does not lead to a user
   */
   getOne(id) {
    const users = parse(this.jsonDbPath, this.defaultItems);
    const foundIndex = users.findIndex((user) => user.id == id);
    if (foundIndex < 0) return;
    return users[foundIndex];
  }

  /**
   * Returns the item identified by username
   * @param {string} username - username of the item to find
   * @returns {object} the item found or undefined if the username does not lead to a item
   */
   getOneByUsername(username) {
    const items = parse(this.jsonDbPath, this.defaultItems);
    const foundIndex = items.findIndex((item) => item.username == username);
    if (foundIndex < 0) return;

    return items[foundIndex];
  }

  addOne(body){
      const users = parse (this.jsonDbPath,this.defaultItems);
      //add a new user 
      const newUser={
          id: this.getNextId(),
          username: body.username,
          password:body.password
      };
      users.push(newUser);
      serialize(this.jsonDbPath,users);
      return newUser;
  }

login(username,password){
    const userFound=this.getOneByUsername(username);
    if(!userFound)return;
    if(userFound.password!== password)return;

    const authenticatedUser = {
      username: username,
      token: "Future signed token",
    };
    // replace expected token with JWT : create a JWT
    const token = jwt.sign(
      { username: authenticatedUser.username }, // session data in the payload
      jwtSecret, // secret used for the signature
      { expiresIn: LIFETIME_JWT } // lifetime of the JWT
    );

    authenticatedUser.token = token;
    return authenticatedUser;
}
}
module.exports = { Users };