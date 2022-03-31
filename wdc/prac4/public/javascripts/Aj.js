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
      
  }