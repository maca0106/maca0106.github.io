window.onload = init;
// Asking the browser to wait for the page to load and before running the functions

function show () {
	var x = document.getElementById("btnshow");
	if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function hide () {
	var x = document.getElementById("btnshow");
	if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function small() {
    document.getElementById("small").style.fontSize = "12px";
}

function large() {
    document.getElementById("big").style.fontSize = "48px";
}

function blue () {
 document.body.style.background = #C5CAE9;

}

function red () {
 document.body.style.background = #ffa291;

}
