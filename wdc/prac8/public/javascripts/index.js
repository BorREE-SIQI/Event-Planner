function add() {

  let actor = {
    first_name: document.getElementsById("actor-first-name").value,
    last_name: document.getElementsById("actor-last-name").value,
  };

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        alert("Add Successful");
    }
  };
  xhttp.open("POST", "/newActor");
  xhttp.send();
  }