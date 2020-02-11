

function navClick() {
  var x = document.getElementById("homenav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

function showResults() {
  var y = document.getElementById("results");
    y.style.display = "block";
   // var z = document.getElementByClassName("instr");
    //z.style.display = "hidden";
}
