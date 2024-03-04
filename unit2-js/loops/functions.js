//function functionName ( parameter1, parameter2 ) { code block }
function sayHello() {
	console.log("hello!");
}

sayHello();

function sayHelloToName(name) {
	console.log(`Hello ${name}`);
}

sayHelloToName("David");
sayHelloToName("Roy");

function addTwoNumbers(num1, num2) {
	if (typeof num1 === "number" && typeof num2 === "number") {
		return num1 + num2;
	} else {
		throw new Error("Bad input!");
	}
}

console.log(addTwoNumbers(2, 3));

let x = addTwoNumbers(7, addTwoNumbers(1, 1));
console.log(x);

let y = addTwoNumbers(3);
// if (!isNaN(y)) {
// 	console.log(y);
// } else {
// 	console.log("Y failed!");
// }

console.log(addTwoNumbers(5, NaN));
console.log(addTwoNumbers("c", "s"));
