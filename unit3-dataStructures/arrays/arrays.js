let fruits = ["apple", "banana", "cherry"];
console.log(fruits[1])
console.log(fruits.length)
console.log(fruits[fruits.length - 1])

//push adds element to the end of the array
fruits.push("strawberry")
console.log(fruits)

let fruitsLen = fruits.push("pineapple", "nectarine")
console.log(fruits)

//pop removes last element from the array
console.log(fruits.pop())
console.log(fruits)

//slice returns a new array including the start index, up to but not including the end index
let newFruits = fruits.slice(1, 4)
newFruits.push("kiwi")
console.log("new fruits", newFruits)
console.log("old fruits", fruits)

console.log(newFruits)
console.log(fruits)

console.log(fruits.slice(0, -1))