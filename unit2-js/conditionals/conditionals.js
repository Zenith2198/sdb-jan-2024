// keyword (expression) { codeBlock } <-- format for conditionals
if (5 < 10) { //true
	console.log("5 is less than 10!")
}

if (5 > 10) { //false
	console.log("5 is greater than 10!")
}

if (5 <= 10) { //true
	console.log("5 is less than or equal to 10!")
}
if (5 <= 5) { //true
	console.log("5 is less than or equal to 5!")
}

if (5 < 5) { //false
	console.log("5 is less than 5!")
}

if (5 == 5) { //true
	console.log("5 is equal to 5!")
}

if (5 != 5) { //false
	console.log("5 is not equal to 5!")
}

if (5 != "5") { //false
	console.log("5 is not equal to \"5\"!") //<-- backslash = escape character
}
if (5 !== "5") { //true
	console.log("5 is not really equal to \"5\"!") //<-- backslash = escape character
}

//we don't need a comparison operator at all!
if (true) {
	console.log("this is true!")
}
if (false) {
	console.log("this is false")
}

if ("true") { //true
	console.log("this is a true string!")
}
if ("false") { //true
	console.log("this is a false string!")
}

if ("") { //false
	console.log("this is an empty string")
}
if (" ") { //true
	console.log("this is a space string")
}
//strings are truthy if it is not empty!

if (1) { //true
	console.log("this is the number 1")
}
if (0) { //false
	console.log("this is the number 0")
}
if (-1) { //true
	console.log("this is -1")
}
if (0.00) { //false
	console.log("this is 0.00")
}
if (12345) { //true
	console.log("this is 12345")
}
if (NaN) { //false
	console.log("this is NaN")
}
//numbers are truthy if it is not 0 (or not NaN)

let arr = [1, 2, 3, 4, 5]
console.log(arr[2])

if (arr) { //true
	console.log("this is our arr variable")
}
let emptyArr = []
if (emptyArr) { //true
	console.log("this is our emptyArr variable")
}
if ({}) { //true
	console.log("this is an empty object")
}

console.log(emptyArr.length)
if (emptyArr.length) { //false <-- length is 0, 0 is false!
	console.log("this is the length of emptyArr")
}
if (emptyArr == false) { //true <-- casts emptyArr to a STRING of its elements
	console.log("this is emptyArr compared to false")
}
if (Boolean(emptyArr)) { //true
	console.log("this is emptyArr casted to a boolean")
}
