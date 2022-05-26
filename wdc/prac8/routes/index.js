var express = require('express');
var router = express.Router();

router.post('/newActor', function(req, res, next) {
  var username = req.query.username; // if username was a field in the request URL
    var query = "INSERT INTO first_name last_name FROM actor WHERE author = ?";
    connection.query(query, [username], function(err, rows, fields) {
      connection.release(); // release connection
      if (err) {
        res.sendStatus(500);
        return;
      }
      res.json(rows); //send response
    });
});

module.exports = router;
