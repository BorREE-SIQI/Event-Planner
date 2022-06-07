var express = require('express');
var router = express.Router();

router.post('/searchUsers', function (req, res, next) {
  //Connect to the database
  req.pool.getConnection( function(err,connection) {
    if (err) {
      res.sendStatus(500);
      console.log(err);
      return;
    }

    var query = "SELECT email password first_name last_name FROM users WHERE email = ?;";
    connection.query(query, [req.body.email], function (err, rows, fields) {
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

router.post('/searchEvents', function (req, res, next) {
  //Connect to the database
  req.pool.getConnection( function(err,connection) {
    if (err) {
      res.sendStatus(500);
      console.log(err);
      return;
    }

    var query = "SELECT event_name description FROM events WHERE email = ?;";
    connection.query(query, [req.body.email], function (err, rows, fields) {
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

router.post('/manageUsers', function (req, res, next) {
  //Connect to the database
  req.pool.getConnection( function(err,connection) {
    if (err) {
      res.sendStatus(500);
      console.log(err);
      return;
    }

    var query = "UPDATE users SET password = ? first_name = ? last_name = ? WHERE email = ?;";
    connection.query(query, [req.body.password,req.body.password,req.body.first_name,req.body.last_name,req.body.email], function (err, rows, fields) {
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
