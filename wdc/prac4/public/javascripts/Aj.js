var responseText = "This page was last viewed "+String(new Date());

function load() {
    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("para").innerHTML = this.responseText;
    }
  };
    xhttp.open("GET", "/last.txt");
    xhttp.send();
  }
