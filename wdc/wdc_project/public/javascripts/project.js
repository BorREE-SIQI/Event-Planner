function showUser()
{
    let users = {
        email: document.getElementsByName("userSearch")[0].placeholder
      };

      console.log(users);

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert("search Successful");
            window.location.replace("./manageUser.html");
            document.getElementsByName("input-email") = this.response.email;
            document.getElementsByName("input-password") = this.response.password;
            document.getElementsByName("input-last") = this.response.last_name;
            document.getElementsByName("input-first") = this.response.first_name;
        }
      };
      xhttp.open("POST", "/searchUsers");
      // Set content type to JSON
      xhttp.setRequestHeader("Content-type", "application/json");
      // Send request
      xhttp.send(JSON.stringify(users));
}


function showEvent()
{
  let events = {
    email: document.getElementsByName("eventSearch").value
  };

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        alert("search Successful");
        //show manage page?
        document.getElementsByName("input-event") = this.response.event_name;
        document.getElementsByName("input-d") = this.response.description;
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
    email: document.getElementsByName("input-email").value,
    password: document.getElementsByName("input-password").value,
    first_name: document.getElementsByName("input-first").value,
    last_name: document.getElementsByName("input-last").value
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
    event: document.getElementsByName("input-event").value,
    d: document.getElementsByName("input-d").value,
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