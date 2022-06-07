var express = require('express');
var router = express.Router();

router.post('/manageUser', function (req, res, next) {
  //Connect to the database
  req.pool.getConnection( function(err,connection) {
    if (err) {
      res.sendStatus(500);
      console.log(err);
      return;
    }

    var query = "SELECT email";
    connection.query(query, [req.body.first_name, req.body.last_name], function (err, rows, fields) {
      connection.release(); // release connection
      if (err) {
        res.sendStatus(500);
        console.log(err);
        return;
      }
      res.sendStatus(200);
    });
  });
});
module.exports = router;
