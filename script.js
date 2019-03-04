var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("randomButton");



function setGradient() {
  body.style.background =
    "linear-gradient(to right, " +
    color1.value +
    ", " +
    color2.value +
    ")";

  css.textContent = body.style.background + ";";
}



setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function createRandomColor () {
	var colorRandom = "#"+(Math.floor(Math.random() * 0xFFFFFF)).toString(16).padEnd(6, "0");
	return colorRandom;
}

randomButton.addEventListener("click", function () {
	color1.setAttribute("value", createRandomColor());
	color2.setAttribute("value", createRandomColor());
	setGradient();
});
