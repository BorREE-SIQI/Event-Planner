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
    var lc = new XMLHttpRequest();
    lc.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        var heading = document.getElementById("h");
        heading.innerHTML = this.responseText;
        heading.style.color = this.responseText;
    }
  };
  lc.open("GET", "/color.txt");
  lc.send();
  }

  function right() {
    var aut = new XMLHttpRequest();
    aut.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("para").innerHTML = "This page was last viewed "+this.responseText;
    }
  };
  aut.open("GET", "/content.ajax");
  aut.send();
  }