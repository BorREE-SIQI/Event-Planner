function load() {
    var xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    //if (this.readyState == 4 && this.status == 200) {
        document.getElementById("para").innerHTML = this.String(new Date());
   // }
  };
    xhttp.open("GET", "/last.txt");
    xhttp.send();
  }
