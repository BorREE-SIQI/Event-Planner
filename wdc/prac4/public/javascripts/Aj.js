function load() {
    var loadTime = new XMLHttpRequest();
    loadTime.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("para").innerHTML = "This page was last viewed "+this.responseText;
    }
  };
  loadTime.open("GET", "/last.txt");
  loadTime.send();
  }

  function loadColor()
  {
    var l = new XMLHttpRequest();
    l.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("para").innerHTML = "This page was last viewed "+this.responseText;
    }
  };
  lc.open("GET", "/color2.html");
  loadTime.send();
  }