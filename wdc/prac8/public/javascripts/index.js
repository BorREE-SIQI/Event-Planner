function add() {
    var new = new XMLHttpRequest();
    new.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
    }
  };
  loadTime.open("GET", "/last.txt");
  loadTime.send();
  }