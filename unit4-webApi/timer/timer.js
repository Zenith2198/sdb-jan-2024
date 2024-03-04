document.getElementById("readyButton").addEventListener("click", () => {
	document.getElementById("readyButton").disabled = true;

	let readyDisplay = document.getElementById("readyDisplay");
	readyDisplay.textContent = "Getting ready...";
	readyDisplay.style.color = "red";

	setTimeout(() => {
		readyDisplay.textContent = "READY";
		document.getElementById("countdownButton").disabled = false;
		readyDisplay.style.color = "green";
	}, 5000);
});

document.getElementById("countdownButton").addEventListener("click", () => {
	document.getElementById("countdownButton").disabled = true;
	let countdownDisplay = document.getElementById("countdownDisplay");
	countdownDisplay.textContent = 5;
	countdownDisplay.style.opacity = 1;
	countdownDisplay.style.userSelect = "auto";

	let interval = setInterval(() => {
		if (countdownDisplay.textContent === "1") {
			countdownDisplay.textContent = "GO!";
			countdownDisplay.style.color = "green";
			clearInterval(interval);
		} else {
			countdownDisplay.textContent -= 1;
		}
	}, 1000);
});