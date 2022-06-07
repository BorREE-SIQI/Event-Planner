function showUser()
{
    let users = {
        users_email: document.getElementsByName("userSearch").value
      };

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert("search Successful");
            document.getElementsByName("input-email") = this.response.email;
            document.getElementsByName("input-password") = this.response.password;
            document.getElementsByName("input-last") = this.response.last_name;
            document.getElementsByName("input-first") = this.response.first_name;
        }
      };
      xhttp.open("POST", "/manageUser");
      // Set content type to JSON
      xhttp.setRequestHeader("Content-type", "application/json");
      // Send request
      xhttp.send(JSON.stringify(users));
}


function showEvent()
{
  let users = {
    users_email: document.getElementsByName("eventSearch").value
  };

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        alert("search Successful");
        document.getElementsByName("input-event") = this.response.event_name;
        document.getElementsByName("input-d") = this.response.description;
    }
  };
  xhttp.open("POST", "/manageEvent");
  // Set content type to JSON
  xhttp.setRequestHeader("Content-type", "application/json");
  // Send request
  xhttp.send(JSON.stringify(users));
}

function modifyUser()
{
  
}