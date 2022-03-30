var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
var date = new Date();

router.get('/color.html', function(req, res, next) {
  res.send(date);
});



router.get('/last.txt', function(req, res, next) {
  res.send(date);
});

module.exports = router;
