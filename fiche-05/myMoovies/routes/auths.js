var express = require('express');
const { Users } = require("../model/users");
var router = express.Router();
const userModel =new Users();

/* post login page. */
router.post('/login', function(req, res) {
  if(

    !req.body ||
    (req.body.hasOwnProperty("username") &&req.body.username.length ===0) ||
    (req.body.hasOwnProperty("password") && req.body.password.length === 0)
  )
  return res.status(400).end();

  const authenticatedUser =userModel.login(
    req.body.username,
    req.body.password
  );
  // Error code '401 Unauthorized' if the user could not be authenticated
  if(!authenticatedUser)return res.status(401).end();

  
  return res.json(authenticatedUser);

});

module.exports = router;
