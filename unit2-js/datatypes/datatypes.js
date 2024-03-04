
/*
	Javascript

	client-side language
	interpreted language (not compiled)
	object oriented (OOP)
	weakly typed (duck typing)
	ECMAScript (organization that sets standards for JS)
*/

/*
	Comments

	blocks of code that are being ignored
	// for a single line comment
	/*  for multiline comments

	for developers to understand what the code is doing
	as a learner, helps us take notes
	helps others understand what our code does

	ctrl(cmd) + / for single line comments
	alt(optn) + shift + a for multiline comments
*/

/* 
	Console

	gives us access to browser (or node) for reading output
	in VSCode, use ctrl + ` to open the console
	is an object
	is for developers, not users
*/

2 + 2; //runs, but doesn't show in console
console.log(2 + 2); //shows in our console

/* 
	JS Datatypes

	Primitives: lowest level, immutable (can't be changed)
		string
		number
		bigint
		boolean
		undefined
		null
		NaN (Not a Number)
		symbol

	Objects
		console
		array
		map
		objects we define ourselves
*/

/* 
	Strings

	data type that represents text
	enclosed in '', "", ``
*/

"this is a string"
console.log("this is a string")

console.log("2024")
console.log(2024)
console.log("It is the year 2024")
console.log("It is the year " + 2024) //strings can be concatenated

let str = "This is a variable"
console.log(str)

//Strings can be indexed
console.log(str[0])

//Strings also have methods
console.log(str.length)

console.log(str[str.length]) //fencepost error
console.log(str[str.length - 1])

console.log(`this is a template literal`)
console.log(`This is the length of "str": ${str.length}`)
// console.log("This is also the length of "str": " + str.length) <-- ERROR!
console.log("This is also the length of 'str': " + str.length)

//Strings can be sliced
console.log(str.slice(0, 4)) //This
console.log(str.slice(0, 4))

/* 
	Booleans

	booleans are yes, or no
	things that aren't booleans still have boolean values (truthy or falsey)
*/

console.log(true)
console.log(false)
console.log(2 == 2)
console.log(2 == 5)

let comp = "string to compare"
console.log(str = comp) //ERROR! Make sure to use == for comparison

console.log(2 == "2") //true
console.log(2 === "2") //false

console.log(typeof 2) //get type of object

/* 
	Type Coercion

	because JS is duck-typed, it infers what the type should be
	comparison (==) doesn't care about the type
	strict comparison (===) DOES care about the type
*/

console.log(null == undefined) //true, both are "falsey"
console.log(null === undefined) //false, they are not the same (null is an object)

