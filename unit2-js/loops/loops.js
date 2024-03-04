//while loop that counts from 0-9
console.log("While loop 0-9");
let i = 0;
while (i < 10) {
	console.log(i);
	i++; //i = i + 1
}

//for loop that counts from 0-9
console.log("\nFor loop 0-9");
for (let i=0; i < 10; i++) { //for (<start>; <stop>; <step>)
	console.log(i);
}

let str = "hello there!";

console.log("\nFor loop over string");
for (let i=0; i < str.length; i++) {
	console.log(str[i]);
}

//for of loops over ITERABLES
console.log("\nFor of loop over string");
for (i of str) {
	console.log(i);
}

let arr = [1, 2, 3, 4, 5];

console.log("\nFor of loop over array");
for (i of arr) {
	console.log(i);
}

let john = {
	age: 27,
	height: 5,
	weight: 150,
	allowed: null
};
john.i

//for in loops over OBJECTS
console.log("\nFor in loop");
for (i in john) {
	console.log(`${i}: ${john[i]}`); //john.age, john.height, john.weight
}

//ternary -> condition ? exprIfTrue : exprIfFalse
console.log("\nTernary");
john.age < 18 ? console.log("john is not allowed") : console.log("john is allowed!");
john.allowed = john.age < 18 ? "Not allowed!" : "Allowed";
console.log(john);

if (john.age < 18) {
	console.log("john is not allowed")
} else {
	console.log("john is allowed!")
}