var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
var date = new Date();

router.get('/last.txt', function(req, res, next) {
  res.send(date);
});

var color;

router.get('/last.txt', function(req, res, next) {
  res.send(
  <!DOCTYPE html>
  <html en = 'lang'>
    <head>
    <meta charset = "UTF-8">
    <title>Task3.2</title>
    </head>
    <body>
      <h1 style = "color:red">red</h1>
    </body>
  </html>
  )
});

module.exports = router;
