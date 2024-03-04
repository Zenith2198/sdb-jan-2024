console.log(document.getElementsByClassName("example"))
console.log("hi there!")

function clickMe() {
	let exampleDiv = document.getElementById("exampleId");

	let button = document.createElement("button");
	button.innerHTML = "45";
	button.onclick = click45;

	exampleDiv.appendChild(button);
}

function click45() {
	let exampleDiv = document.getElementById("exampleId");

	exampleDiv.innerHTML = "poggers2";
}

console.log(document.getElementById("test"))

let form = document.getElementById("form");
form.addEventListener("submit", (event) => { //form onsubmit event listener
	event.preventDefault();
	console.log("form was submitted")
});
