var express = require('express');
var router = express.Router();

router.post('/addpost', function(req, res, next) {
  console.log("POST from a user");
  res.send("hiii");
});

router.post('/*', function(req, res, next) {
  console.log("POST from a user");
  res.send("hiii");
});
module.exports = router;
