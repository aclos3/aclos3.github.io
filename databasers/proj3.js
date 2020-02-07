

function myFunction() {
  var x = document.getElementById("homenav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}