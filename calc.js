//to enter the digits on the display:
var screen = "";
var b = document.getElementsByClassName("button9");
for (i = 0; i < b.length; i++) {
  b[i].addEventListener("click", function gi(event) {
    var x = event.target.value;
    screen = screen + x;
    document.getElementById("display").innerText = screen;
  });
}

//to activate the delete button:
var u = document.getElementById("del");
u.addEventListener("click", function () {
  screen = screen.slice(0, -1);
  document.getElementById("display").innerText = screen;
});

//to activate the clear button:
var t = document.getElementById("clear");
t.addEventListener("click", function () {
  screen = "";
  document.getElementById("display").innerText = screen;
});

//to activate the math operations:
var eq = document.getElementById("equal");
eq.addEventListener("click", function () {
  var a = null;
  var b = null;

  //for activating addition
  for (var j = 0; j < screen.length; j++) {
    if (screen[j] == "+") {
      a = screen.slice(0, j);
      b = screen.slice(j + 1, screen.length);
      var n = parseInt(a);
      var m = parseInt(b);
      var r = n + m;
      screen = r;
      document.getElementById("display").innerText = screen;
    }

    //for activating subtraction
    if (screen[j] == "-") {
      a = screen.slice(0, j);
      b = screen.slice(j + 1, screen.length);
      var n = parseInt(a);
      var m = parseInt(b);
      var r = n - m;
      screen = r;
      document.getElementById("display").innerText = screen;
    }

    //for activating multiplication
    if (screen[j] == "x") {
      a = screen.slice(0, j);
      b = screen.slice(j + 1, screen.length);
      var n = parseInt(a);
      var m = parseInt(b);
      var r = n * m;
      screen = r;
      document.getElementById("display").innerText = screen;
    }

    //for activating division
    if (screen[j] == "÷") {
      a = screen.slice(0, j);
      b = screen.slice(j + 1, screen.length);
      var n = parseInt(a);
      var m = parseInt(b);
      var r = n / m;
      screen = r;
      document.getElementById("display").innerText = screen;
    }
  }
});
