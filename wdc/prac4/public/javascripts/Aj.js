function load() {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
    //xhttp.onreadystatechange = function() {
    //   if (this.readyState == 4 && this.status == 200) {
        document.getElementById("para").innerText= "This page was last viewed ";//+ String(new Date());
    //}
    };
    xhttp.open("GET", "/last.txt");
    xhttp.send();
  }