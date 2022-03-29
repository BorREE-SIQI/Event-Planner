var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/last.txt', function(req, res, next) {
  res.send('this is a test');
});

module.exports = router;
