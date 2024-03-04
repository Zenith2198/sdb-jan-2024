const readline = require('readline');
const readlineInterface = readline.createInterface(
	process.stdin,
	process.stdout
);

function ask(questionText) {
	return new Promise((resolve, reject) => {
		readlineInterface.question(questionText, resolve);
	});
}

function randomNumber(min, max) { //min and max are inclusive
	return Math.floor(Math.random() * (max - min + 1) + min);
}

async function run() {
	//introduce the user to the game
	console.log("Please think of a whole number between 1 and 100. I will try to guess it!");
	await ask("When you have thought of a number (don't tell me), hit enter! > ");

	//loop until the correct number has been guessed
	let stillGuessing = true;
	let min = 1;
	let max = 100;
	while (stillGuessing) {
		//generate a guess
		let guess = randomNumber(min, max);

		let tempMin = 0;
		let tempMax = 0;

		do {
			//only triggers after at least 1 iteration
			if (tempMin > tempMax) {
				console.log("Liar! That can't be possible!");
			}

			//reset our temp state variables
			tempMin = min;
			tempMax = max;

			//check if the first response is valid
			let response = null;
			do {
				if (response !== null) {
					console.log("Bad input! Please say either y or n.");
				}
				response = await ask(`Is your number ${guess}? (y/N) > `);
			} while (response !== "" && response.toLowerCase() !== "n" && response.toLowerCase() !== "y");

			//check if the guess was correct
			if (response.toLowerCase() === "y") { //guess was correct
				stillGuessing = false;
				break;
			} else { //guess was incorrect
				//check if the user lied and the guess has to be the correct number
				if (tempMin === tempMax) {
					console.log(`Liar!!!!! ${guess} has to be your number!`);
					stillGuessing = false;
					break;
				}

				//check if second guess was valid
				let highLow = null;
				do {
					if (highLow !== null) {
						console.log("Bad input! Please say either h or l.");
					}
					highLow = await ask(`Is your number higher or lower than ${guess}? (h/l) > `);
				} while (highLow.toLowerCase() !== "h" && highLow.toLowerCase() !== "l");

				//check if guess was too high or too low
				if (highLow.toLowerCase() === "h") {
					tempMin = guess + 1;
				} else if (highLow.toLowerCase() === "l") {
					tempMax = guess - 1;
				}
			}
		} while (tempMin > tempMax);

		min = tempMin;
		max = tempMax;
	}

	console.log("Woopie!!!! I did it!!");

	process.exit();
}

run();