let arr = ["hello!", 7, ["goodbye", "no for real"]]
console.log(arr)

console.log(arr[2][1])
console.log(arr[0][1])
console.log(arr[1][1])

console.log("\n-------\n")

let fruits = ["apple", "banana", "cherry", "strawberry", "pineapple"];

console.log("\nfor...of")
for (fruit of fruits) {
	console.log("I like " + fruit + "!")
}

console.log("\nforEach")
fruits.forEach((element) => {
	console.log(`I like ${element}!`)
})

console.log("\nfind")
console.log(fruits.find((element) => {
	return element[0] === "b"
}))

console.log("\nfilter")
console.log(fruits.filter((element) => {
	return element.slice(-1) === "y"
}))

console.log("\nmap")
console.log(fruits.map((element) => {
	return `I like ${element}!`
}))

console.log("\nreduce")
console.log(fruits.reduce((accumulator, element) => {
	return accumulator + element.length
}, 0))