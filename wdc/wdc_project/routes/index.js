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

    var query = "SELECT * FROM users WHERE email = ?;";
    console.log(req.body);
    connection.query(query, [req.body.email], function (err, rows, fields) {
      connection.release(); // release connection
      if (err) {
        res.sendStatus(500);
        console.log(err);
        return;
      }
      console.log(rows);
      res.json(rows[0]);
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

    var query = "SELECT * FROM events WHERE event_name = ?;";
    connection.query(query, [req.body.event_name], function (err, rows, fields) {
      connection.release(); // release connection
      if (err) {
        res.sendStatus(500);
        console.log(err);
        return;
      }
      res.json(rows[0]);
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

    var query = "UPDATE users SET password = ?, first_name = ?, last_name = ? WHERE email = ?;";
    connection.query(query, [req.body.password,req.body.first_name,req.body.last_name,req.body.email], function (err, rows, fields) {
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

router.post('/manageEvents', function (req, res, next) {
  //Connect to the database
  req.pool.getConnection( function(err,connection) {
    if (err) {
      res.sendStatus(500);
      console.log(err);
      return;
    }

    var query = "UPDATE events SET description = ? WHERE event_name = ?;";
    connection.query(query, [req.body.d,req.body.event], function (err, rows, fields) {
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

router.post('/deleteUsers', function (req, res, next) {
  //Connect to the database
  req.pool.getConnection( function(err,connection) {
    if (err) {
      res.sendStatus(500);
      console.log(err);
      return;
    }

    var query = "DELETE FROM users WHERE email = ?;";
    console.log(req.body);
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
module.exports = router;
