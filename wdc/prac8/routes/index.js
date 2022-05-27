var express = require('express');
var router = express.Router();

router.post('/newActor', function (req, res, next) {
  req.pool.getConnection(function (err, connection) {
    if (error) {
      res.sendStatus(500);
      console.log(error);
      return;
    }

    var query = "INSERT INTO actor(first_name last_name) VALUES(?,?);";
    connection.query(query, [req.body.first_name, req.body.last_name], function (err, rows, fields) {
      connection.release(); // release connection
      if (err) {
        res.sendStatus(500);
        return;
      }
      res.sendStatus(200);
      res.json(rows); //send response
    });
  })
});

module.exports = router;
