var express = require('express');
var router = express.Router();
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client("1006345318538-06u5fqd3sur2bthaea307jtjalc33f3r.apps.googleusercontent.com");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'landingPage' });
});

////////////////////////////////////////////////////////////////////////////////

router.post('/login', function(req, res, next) {

  // console.log("inside route")

  if ('email' in req.body && 'password' in req.body) {

      req.pool.getConnection(function(error,connection){
        if(error){
          console.log("connection error")
          console.log(error);
          res.sendStatus(500);
          return;
        }

        let query = "SELECT first_name,last_name, email FROM users WHERE email = ? AND password = ?;";
        connection.query(query,[req.body.email,req.body.password],function(error, rows, fields) {
          connection.release(); // release connection
          if (error) {
            console.log("query error")
            console.log(error);
            res.sendStatus(500);
            return;
          }

          if (rows.length > 0){
            console.log('success');
            req.session.user = req.body.email;
            res.sendStatus(200);
          }else{
            console.log('bad login');
            res.sendStatus(401);
          }

          });
        });

  }else if ('token' in req.body) {

        let email =null;
        async function verify() {
          const ticket = await client.verifyIdToken({
              idToken: req.body.token,
              audience: '1006345318538-06u5fqd3sur2bthaea307jtjalc33f3r.apps.googleusercontent.com',  // Specify the CLIENT_ID of the app that accesses the backend
              // Or, if multiple clients access the backend:
              //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
          });
          const payload = ticket.getPayload();
          const userid = payload['sub'];
          console.log(userid)
          email = payload['email'];
          // email = payload['email'];
        }
        // verify().then(function).catch(console.error);//////
        verify().then(function(){

          req.pool.getConnection(function(error,connection){
            if(error){
              console.log("connection error")
              console.log(error);
              res.sendStatus(500);
              return;
            }

            let query = "SELECT first_name,last_name,email FROM users WHERE email = ?;";
            connection.query(query,[email],function(error, rows, fields) {
              connection.release(); // release connection
              if (error) {
                console.log("query error")
                console.log(error);
                res.sendStatus(500);
                return;
              }

              if (rows.length > 0){
                console.log('success');
                req.session.user = req.body.email;
                res.sendStatus(200);
              }else{
                console.log('bad login');
                res.sendStatus(401);
              }

              });
            });
          }).catch(function(){
          res.sendStatus(401);
        });

  } else {
    console.log('bad request');
    res.sendStatus(400);
  }

});

////////////////////////////////////////////////////////////////////////////////
router.get('/test', function(req, res, next) {
  if('user' in req.session){
    res.json(req.session.user);
  } else {
    res.send('This is a test');
  }
});

////////////////////////////////////////////////////////////////////////////////

router.post('/adminLogin', function(req, res, next) {

  if ('email' in req.body && 'password' in req.body) {

      req.pool.getConnection(function(error,connection){
        if(error){
          console.log("connection error")
          console.log(error);
          res.sendStatus(500);
          return;
        }

        let query = "SELECT email FROM admin WHERE email = ? AND password = ?;";
        connection.query(query,[req.body.email,req.body.password],function(error, rows, fields) {
          connection.release(); // release connection
          if (error) {
            console.log("query error")
            console.log(error);
            res.sendStatus(500);
            return;
          }

          if (rows.length > 0){
            console.log('success');
            req.session.user = req.body.email;
            res.sendStatus(200);
          }else{
            console.log('bad login');
            res.sendStatus(401);
          }

          });
        });

  }else if ('token' in req.body) {

        let email =null;
        async function verify() {
          const ticket = await client.verifyIdToken({
              idToken: req.body.token,
              audience: '1006345318538-06u5fqd3sur2bthaea307jtjalc33f3r.apps.googleusercontent.com',  // Specify the CLIENT_ID of the app that accesses the backend
              // Or, if multiple clients access the backend:
              //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
          });
          const payload = ticket.getPayload();
          const userid = payload['sub'];
          console.log(userid)
          email = payload['email'];
          // email = payload['email'];
        }
        // verify().then(function).catch(console.error);//////
        verify().then(function(){

          req.pool.getConnection(function(error,connection){
            if(error){
              console.log("connection error")
              console.log(error);
              res.sendStatus(500);
              return;
            }

            let query = "SELECT email FROM admin WHERE email = ?;";
            connection.query(query,[email],function(error, rows, fields) {
              connection.release(); // release connection
              if (error) {
                console.log("query error")
                console.log(error);
                res.sendStatus(500);
                return;
              }

              if (rows.length > 0){
                console.log('success');
                req.session.user = req.body.email;
                res.sendStatus(200);
              }else{
                console.log('bad login');
                res.sendStatus(401);
              }

              });
            });
          }).catch(function(){
          res.sendStatus(401);
        });

  } else {
    console.log('bad request');
    res.sendStatus(400);
  }

});

////////////////////////////////////////////////////////////////////////////////

router.post('/userAccount', function(req, res, next) {

  if ('email' in req.body && 'password' in req.body) {

    console.log("in the route")

      req.pool.getConnection(function(error,connection){
        if(error){
          console.log("connection error")
          console.log(error);
          res.sendStatus(500);
          return;
        }

        console.log("connected to database")
        let query = "INSERT INTO users VALUES (?,?,?,?);";
        connection.query(query,[req.body.email, req.body.password, req.body.last_name, req.body.first_name],function(error, rows, fields) {

          connection.release(); // release connection
          if (error) {
            console.log("query error")
            console.log(error);
            res.sendStatus(500);
            return;
          }
           req.session.user = req.body.email;
            res.sendStatus(200);

          });
        });

  // } //else if ('token' in req.body) {

  //       let email =null;
  //       async function verify() {
  //         const ticket = await client.verifyIdToken({
  //             idToken: req.body.token,
  //             audience: '1006345318538-06u5fqd3sur2bthaea307jtjalc33f3r.apps.googleusercontent.com',  // Specify the CLIENT_ID of the app that accesses the backend
  //             // Or, if multiple clients access the backend:
  //             //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  //         });
  //         const payload = ticket.getPayload();
  //         const userid = payload['sub'];
  //         console.log(userid)
  //         email = payload['email'];
  //         // email = payload['email'];
  //       }
  //       // verify().then(function).catch(console.error);//////
  //       verify().then(function(){

  //         req.pool.getConnection(function(error,connection){
  //           if(error){
  //             console.log("connection error")
  //             console.log(error);
  //             res.sendStatus(500);
  //             return;
  //           }

  //           let query = "SELECT email FROM admin WHERE email = ?;";
  //           connection.query(query,[email],function(error, rows, fields) {
  //             connection.release(); // release connection
  //             if (error) {
  //               console.log("query error")
  //               console.log(error);
  //               res.sendStatus(500);
  //               return;
  //             }

  //             if (rows.length > 0){
  //               console.log('success');
  //               //req.session.user = row[0];
  //               res.sendStatus(200);
  //             }else{
  //               console.log('bad login');
  //               res.sendStatus(401);
  //             }

  //             });
  //           });
  //         }).catch(function(){
  //         res.sendStatus(401);
  //       });

  } else {
    console.log('bad request because no email and password');
    res.sendStatus(400);
  }

});

////////////////////////////////////////////////////////////////////////////////
router.post('/logout', function(req, res, next) {
  if('user' in req.session){
    delete req.session.user;
  }
  res.end();

});




var project = new Vue({

  el: '#vue',
  data: {
    search_user : ''
  },

  methods: {

showUser: function()
{
    let users = {
        email: project.search_user
        //document.getElementsByName("userSearch")[0].value
      };

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.response);
            console.log(obj);
            alert("search Successful");
            window.location.replace(`./manageUser.html?email=${obj.email}&last_name=${obj.last_name}&first_name=${obj.first_name}&password=${obj.password}`);
        }
      };
      xhttp.open("POST", "/searchUsers");
      // Set content type to JSON
      xhttp.setRequestHeader("Content-type", "application/json");
      // Send request
      xhttp.send(JSON.stringify(users));
}
  }

})


function showEvent()
{
  let events = {
    event_name: document.getElementsByName("eventSearch")[0].value
  };

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.response);
        console.log(obj);
        alert("search Successful");
        window.location.replace(`./manageEvent.html?event_name=${obj.event_name}&description=${obj.description}`);

    }
  };
  xhttp.open("POST", "/searchEvents");
  // Set content type to JSON
  xhttp.setRequestHeader("Content-type", "application/json");
  // Send request
  xhttp.send(JSON.stringify(events));
}

function modifyUser()
{
  let users = {
    email: document.getElementsByName("input-email")[0].value,
    password: document.getElementsByName("input-password")[0].value,
    first_name: document.getElementsByName("input-first")[0].value,
    last_name: document.getElementsByName("input-last")[0].value
  };

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        alert("change Successful");
    }
  };
  xhttp.open("POST", "/manageUsers");
  // Set content type to JSON
  xhttp.setRequestHeader("Content-type", "application/json");
  // Send request
  xhttp.send(JSON.stringify(users));
}

function modifyEvent()
{
  let events = {
    event: document.getElementsByName("input-event")[0].value,
    d: document.getElementsByName("input-d")[0].value,
  };

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        alert("change Successful");
    }
  };
  xhttp.open("POST", "/manageEvents");
  // Set content type to JSON
  xhttp.setRequestHeader("Content-type", "application/json");
  // Send request
  xhttp.send(JSON.stringify(events));
}

function loadUser()
{
  const urlParams = new URLSearchParams(window.location.search);
  document.getElementsByName("input-email")[0].value = urlParams.get('email');
  document.getElementsByName("input-password")[0].value = urlParams.get('password');
  document.getElementsByName("input-last")[0].value = urlParams.get('last_name');
  document.getElementsByName("input-first")[0].value = urlParams.get('first_name');
}

function loadEvent()
{
  const urlParams = new URLSearchParams(window.location.search);
  document.getElementsByName("input-event")[0].value = urlParams.get('event_name');
  document.getElementsByName("input-d")[0].value = urlParams.get('description');
}

function deleteUser()
{
  let users = {
    email: document.getElementsByName("input-email")[0].value
  };

  console.log(users);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        alert("Delete Successful");
    }
  };
  xhttp.open("POST", "/deleteUsers");
  // Set content type to JSON
  xhttp.setRequestHeader("Content-type", "application/json");
  // Send request
  xhttp.send(JSON.stringify(users));
}

function deleteEvent()
{
  let events = {
    event: document.getElementsByName("input-event")[0].value,
    d: document.getElementsByName("input-d")[0].value,
  };

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        alert("Delete Successful");
    }
  };
  xhttp.open("POST", "/deleteEvents");
  // Set content type to JSON
  xhttp.setRequestHeader("Content-type", "application/json");
  // Send request
  xhttp.send(JSON.stringify(events));
}

function createAdmin()
{
  let admin = {
    email: document.getElementsByName("input-admin-email")[0].value,
    password: document.getElementsByName("input-admin-password")[0].value
  };
  console.log(admin);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        alert("Add Successful");
    }
  };
  xhttp.open("POST", "/createAdmins");
  // Set content type to JSON
  xhttp.setRequestHeader("Content-type", "application/json");
  // Send request
  xhttp.send(JSON.stringify(admin));
}

function pickTime()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.response);
      var obj = JSON.parse(this.response);
      console.log(obj);
      console.log(obj.timestamp);
      document.getElementsByName("finalDate")[0].innerHTML= obj.timestamp;
        //alert("Add Successful");
    }
  };
  xhttp.open("GET", "/showTime");
  xhttp.send();
}

function collectTime()
{
  let available = {
    date: document.getElementsByName("time")[0].value,
    id: document.getElementsByName("ID")[0].value,
  };

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        alert("Add Successful");
    }
  };
  xhttp.open("POST", "/collectTimes");
  // Set content type to JSON
  xhttp.setRequestHeader("Content-type", "application/json");
  // Send request
  xhttp.send(JSON.stringify(available));
}

function createNewEvent()
{
  let event = {
    name: document.getElementsByName("eventName")[0].value,
    d: document.getElementsByName("eventD")[0].value,
  };

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        alert("Add Successful");
    }
  };
  xhttp.open("POST", "/createEvents");
  // Set content type to JSON
  xhttp.setRequestHeader("Content-type", "application/json");
  // Send request
  xhttp.send(JSON.stringify(event));
}

module.exports = router;
