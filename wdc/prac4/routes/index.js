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

var check_first = 0;

router.get('/first.html', function(req, res, next) {
  if(check_first ==0)
  {
    check_first++;

    res.send(
    `<!DOCTYPE html>
    <html lang = 'en'>
      <head>
      <meta charset = "UTF-8">
      <title>Task3.2</title>
      </head>
      <body>
      <h1>Welcome</h1>
      <a href = "/main.html">Link</a>
      </body>
      </html>
      `);
  }

  else
  {
  res.redirect('/main.html');
  }

});

var check_main = 0;

router.get('/main.html', function(req, res, next) {
  if(check_main == 0)
  {
    res.redirect('/first.html');
    check_main++;
  }
  else
  {
    res.send(
      `<!DOCTYPE html>
      <html lang = 'en'>
        <head>
        <meta charset = "UTF-8">
        <title>Task3.2</title>
        </head>
        <body>
        <h1>My main site</h1>
        <p>Random Text</p>
        </body>
        </html>
        `);
  }
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

var color2 = ['red','yellow','green','blue'];
var count2 = 0;
router.get('/color.txt', function(req, res, next) {
  if(count2%4 == 0)
  {
    color2 = 'red';
  }
  else if(count2%4 == 1)
  {
    color2 = 'yellow';
  }
  else if(count2%4 == 2)
  {
    color2 = 'green';
  }
  else if(count2%4 == 3)
  {
    color2 = 'blue';
  }

  count2++;

  res.send(color2);
});

var v = 0;
router.get('/accept', function(req, res, next) {
  res.status(200).send();
  v++;
});

router.get('/content.ajax', function(req, res, next) {
  if(v==0)
  {
  res.status(403).send();
  }
  else
  {
    res.send(`
        <p>Welcome</p>
        <p>You have already accepted terms and conditions</p>
    `);
  }
});

router.get('/contact.ajax', function(req, res, next) {
  res.send(`<a ref = "a1787824@student.adelaide.edu.au">Lnk to my student email</a>`);
});

router.get('/search.ajax', function(req, res, next) {
  res.send(`
  <input type="text">
  <button>search</button>
  `);
});

module.exports = router;
