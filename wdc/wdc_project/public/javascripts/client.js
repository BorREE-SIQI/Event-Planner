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


function userEvent()
{
  let events = {
    event_name: document.getElementsByName("eventDetails")[0].innerHTML
  };

  console.log(events);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.response);
        var obj = JSON.parse(this.response);
        console.log(obj);
        alert("Show Successful");
        window.location.replace(`./eventDetail.html?event_name=${obj.event_name}&description=${obj.description}`);

    }
  };
  xhttp.open("POST", "/userEvents");
  // Set content type to JSON
  xhttp.setRequestHeader("Content-type", "application/json");
  // Send request
  xhttp.send(JSON.stringify(events));
}

function loadUserEvent()
{
  const urlParams = new URLSearchParams(window.location.search);
  document.getElementsByName("user-event-name")[0].value = urlParams.get('event_name');
 // document.getElementsByName("user-event-ID")[0].value = urlParams.get('ID');
  document.getElementsByName("user-event-d")[0].value = urlParams.get('description');
}