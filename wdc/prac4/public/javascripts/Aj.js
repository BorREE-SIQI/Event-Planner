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
        document.getElementById("body").innerHTML += this.responseText;
    }
    if (this.readyState == 4 && this.status == 403) {
      var a = document.getElementById("option");
      a.style.display = "block";
  }
  };
  aut.open("GET", "/content.ajax",true);
  aut.send();
  }

  function verify()
  {
    var b = new XMLHttpRequest();
    b.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("body").innerHTML = this.responseText;
    }
  };
  b.open("GET", "/accept");
  b.send();
  }