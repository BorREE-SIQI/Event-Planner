function load() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
        document.getElementById("para").innerHTML= "This page was last viewed ";//+ String(new Date());
    }
    };
    xhttp.open("GET", "/last.txt", true);
    xhttp.send();
  }