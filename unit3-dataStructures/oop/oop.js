let states = {
	green: ["yellow"],
	yellow: ["red"],
	red: ["green", "yield"],
	yield: ["red"]
};

function transition(newState) {
	let options = states[currentState];
	if (options.includes(newState)) {
		currentState = newState;
	} else {
		for (let o of options) {
			let options2 = states[o];
			if (options2.includes(newState)) {
				currentState = newState;
				return;
			}
		}
		throw new Error(`Invalid state transition attempted from ${currentState} to ${newState}`);
	}
}


// function traverse(newState) {
// 	while (currentState !== newState) {
// 		let options = states[currentState];
// 		if (options.includes(newState)) {
// 			currentState = newState;
// 		} else {
// 			currentState = options[0];
// 		}
// 	}
// }



let currentState = "green";

transition("yield");
console.log(currentState)
