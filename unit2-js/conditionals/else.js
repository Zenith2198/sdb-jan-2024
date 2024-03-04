console.log("Section 1")

if (false) {
	console.log("this is false!")
} else {
	console.log("this is our else block!")
}

console.log("\nSection 2")

let john = {
	age: 27,
	height: 5,
	weight: 150
}

if (john.age === 27) {
	console.log("john is 27!")
}
if (john.age === 28) {
	console.log("john is 28!")
} else {
	console.log("john is NOT 28!")
}

console.log("\nSection 3")

if (true) {
	console.log("true!")
} else {
	console.log("this is our true else!")
}

let f = false
if (!f) { //<-- f === false, SAME THING!!!! The "!" is the "NOT" operator
	console.log("f")
}

console.log("\nSection 4")

//this ride only allows people from the ages of 16 to 27 on!
if (16 <= john.age <= 27) {
	console.log("john is allowed on the ride!")
} else {
	console.log("john is not allowed on the ride")
}

//this ride only allows people 18 and older, who are also taller than 5.5
if (john.age >= 18 && john.height > 5.5) {
	console.log("john is also allowed!")
} else {
	console.log("john is not allowed!")
}

//this ride only allows people 18 and older, OR people that are taller than 5.5
if (john.age >= 18 || john.height > 5.5) {
	console.log("john is also allowed!")
} else {
	console.log("john is not allowed!")
}

//this ride only allows people younger than 18, AND people that are shorter than 5.5
//if (john.age < 18 && john.height < 5.5) <-- SAME AS BELOW
if (!(john.age >= 18 || john.height > 5.5)) {
	console.log("john is also allowed!")
} else {
	console.log("john is not allowed!")
}

//this ride lets anyone who is taller than 5.5, older than 18, OR heavier than 120
if (john.height >= 5.5) {
	console.log("allowed!")
} else if (john.age >= 18) {
	console.log("also allowed")
} else if (john.weight >= 120) {
	console.log("also also 	allowed!")
} else {
	console.log("definitely not allowed!!")
}