var prac8 = new Vue({
  el: '#main',
  data: {
    actors: [
      { first: 'first1',last: 'last1' },
      { first: 'first2',last: 'last2' }
    ],

  },
  methods: {
    add: function() {
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
    },

    show: function() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          actors = this.response;
          console.log(actors);
        }
      };
      xhttp.open("GET", "/showActor");
      xhttp.send();
    },

  }
})

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
        actors = this.response;
        console.log(actors);
      }
    };
    xhttp.open("GET", "/showActor");
    xhttp.send();
    }

  //   var vueinst = new Vue({
  //     el: '#main',
  //     data: {
  //       actors: [
  //           {first: 'first1',last: 'last1'},
  //           {first: 'first2',last: 'last2'}

  //         ]
  //     },
  //     methods:{

  //     }
  // });

