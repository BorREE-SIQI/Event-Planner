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
    res.sendStatus(418);
  }
  else
  {
    res.sendStatus(400)
  }
});

var count = 0;
var arr = [];

router.post('/pass-it-on', function(req, res, next) {

  var p = req.body.message;

  if(!p)
  {
    res.sendStatus(400);
  }

    arr.push(p);

    if(count == 0)
    {
      res.send('first');
      count++;
    }
  else if(count > 0)
    {
    res.send(arr[count-1]);
    count++;
    }

});

router.post('/combine', function(req, res, next) {

  var a = req.body.suffix;
  var b = req.body.lines;
  var len = b.length;

  res.send(b[0]+a+'\n'+b[1]+a+'\n'+b[2]+a);
  // for (let i = 0; i < len; i++)
  // {
  //   res.send(b[i]+a);
  // }

});

router.get('/cookie', function(req, res, next) {
    var c = req.cookies.task3_1;

    if(!c)
    {
      res.cookie('task3_1', '1');
    }
    else
    {
      res.cookie('task3_1', 'c+1');
    }

    res.send();
});


module.exports = router;
