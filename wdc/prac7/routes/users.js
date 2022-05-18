var express = require('express');
var router = express.Router();

router.post('/addpost', function(req, res, next) {
  console.log("POST from a user");
  res.send("hiii");
});

router.post('/*', function(req, res, next) {
  if(!req.get('Content-Type'))
  {
    res.sendStatus(412);
  }
  else
  {
    res.end();
  }
});
module.exports = router;
