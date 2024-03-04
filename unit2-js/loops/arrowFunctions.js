(str1, str2) => {
	return str1.length + str2.length;
};

// console.log(addStrLengths("what", "1"))

let arr = ["hi", "hello", "goodbye"];

arr.forEach((element) => {
	console.log(element);
});

let arr2 = arr.map((element) => element[0]);

console.log(arr2);
console.log(arr);

function forEachFun(element) {
	console.log(element + "!");
}

arr.forEach(forEachFun);
console.log(forEachFun);
