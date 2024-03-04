let form = document.getElementById("form");
form.addEventListener("submit", (event) => {
	event.preventDefault();
	console.log(event.target)
	let firstName = document.querySelector("[name='first-name']").value
	let lastName = document.querySelector("[name='last-name']").value
	console.log(firstName, lastName)
});

console.log(new URLSearchParams(document.location.search));