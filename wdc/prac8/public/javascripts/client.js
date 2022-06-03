function add() {

  let actor = {
    first_name: document.getElementById("actor-first-name").value,
    last_name: document.getElementById("actor-last-name").value
  };

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        alert("Add Successful");
    }
  };
  xhttp.open("POST", "/newActor");
  // Set content type to JSON
  xhttp.setRequestHeader("Content-type", "application/json");
  // Send request
  xhttp.send(JSON.stringify(actor));
  }


  function show() {

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {

      }
    };
    xhttp.open("GET", "/showActor");
    xhttp.send();
    }

    var vueinst = new Vue({
      el: '#main',
      data: {
        actor: ACTOR[0],
          ACTOR: [
            {first: 'first ...',last: 'last ...'}
          ]
      }
  });