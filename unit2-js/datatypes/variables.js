/* 
	Variables

	containers that store information
	name that is stored separately from the value
		name POINTS to the value
	
	initialize: 
		(a) (b) (c)* (d)*
		(a): keyword (let, var, const) -> default to using let
		(b): name of the variable

		(c): assignment operator (=) *OPTIONAL
		(d): value of the variable *OPTIONAL
*/

let str
console.log(str)

str = "string"
console.log(str)

const constStr = "string2"
console.log(constStr)

let innerVar
console.log("--------")
console.log(innerVar)
if (constStr === "string2") {
	innerVar = "hi!"
	console.log(innerVar)
	console.log(str)
}

console.log(innerVar)