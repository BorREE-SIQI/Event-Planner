var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
var date;

router.get('/last.txt', function(req, res, next) {
  res.send(date);
  date=String(new Date());
});

var time = '';

router.get('/log.html', function(req, res, next) {
  var timeShot = String(new Date());
  time += '<li>' + timeShot + '</li>';
  res.send(
    `<!DOCTYPE html>
    <html lang = 'en'>
      <head>
      <meta charset = "UTF-8">
      <title>Task3.3</title>
      </head>
      <body>
      <ul>
      ${time}
      </ul>
      </body>
      </html>`
      );

});

var check = 0;

router.get('/first.html', function(req, res, next) {
  check++;
  res.send(
    `<!DOCTYPE html>
    <html lang = 'en'>
      <head>
      <meta charset = "UTF-8">
      <title>Task3.2</title>
      </head>
      <body>
      <h1>Welcome</h1>
      <a href = "/main.html">main.html</a>
      <p>Random Text</p>
      </body>
      </html>
      `);

  res.redirect('/main.html');
});

router.get('/main.html', function(req, res, next) {
  res.send(date);
  date=String(new Date());
});

var color = ['red','yellow','green','blue'];

var count = 0;

router.get('/color.html', function(req, res, next) {

  if(count%4 == 0)
  {
    color = 'red';
  }
  else if(count%4 == 1)
  {
    color = 'yellow';
  }
  else if(count%4 == 2)
  {
    color = 'green';
  }
  else if(count%4 == 3)
  {
    color = 'blue';
  }

  count++;

  res.send(
  `<!DOCTYPE html>
  <html lang = 'en'>
    <head>
    <meta charset = "UTF-8">
    <title>Task3.2</title>
    </head>
    <body>
      <h1 id = "color">${color}</h1>
      <script>
        var color = document.getElementById('color');
        color.style.color = color.innerText;
      </script>
    </body>
  </html>`
  );
});

module.exports = router;
