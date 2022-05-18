var express = require('express');
var router = express.Router();

router.post('/*', function(req, res, next) {
  if(!req.get('Content-Type') && !req.get("application/json"))
  {
    res.sendStatus(412);
  }
  else
  {
    next();
  }
});

router.post('/addpost', function(req, res, next) {
  console.log("POST from a user");
  res.send("hiii");
});


module.exports = router;
