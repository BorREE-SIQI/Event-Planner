var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/brew', function(req, res, next) {
  var d = req.query.drink;
  if(d == "tea")
  {
    res.send('A delicious cup of tea!');
  }
  else if(d == 'coffee')
  {
    res.send(418);
  }
  else
  {
    res.send(400)
  }
});

var count = 0;
var arr = [];

router.post('/pass-it-on', function(req, res, next) {

  var p = req.body.message;

  if(!p)
  {
    res.send(400);
  }
  else
  {
    //arr.push(p);

    if(count = 0)
    {
      res.send('first');
      count++;
    }
  else if(count > 0)
    {
    res.send(arr[count-1]);
    count++;
    }
}

});

module.exports = router;
