var express = require('express');
var router = express.Router();

router.post('/newActor', function(req, res, next) {
  var first_name = req.query.first_name; // if username was a field in the request URL
    var query = "INSERT INTO actor(first_name last_name) VALUES(?,?);";
    connection.query(query, [req.body.first_name, req.body.last_name], function(err, rows, fields) {
      connection.release(); // release connection
      if (err) {
        res.sendStatus(500);
        return;
      }
      res.json(rows); //send response
    });
});

module.exports = router;
