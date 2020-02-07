

function navClick() {
  var x = document.getElementById("homenav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}