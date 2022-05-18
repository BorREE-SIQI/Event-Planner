var express = require('express');
var router = express.Router();

router.post('/users', function(req, res, next) {
  console.log("POST from a user");
  next();
});

module.exports = router;
