let dog = {
	name: "Vega",
	sex: "female",
	breed: "princess",
	color: "toffee",
	age: 2,
	weight: 7,
	size: "small",
	speak: async () => {
		setTimeout(() => {
			console.log("bark!")
		}, 3000);
	},
	get getDogYears() {
		return this.age * 7;
	}
}

dog.speak()
console.log(dog.getDogYears)
dog.age++;
console.log(dog.getDogYears)
