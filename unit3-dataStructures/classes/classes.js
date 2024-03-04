class Person {
	constructor(name) {
		this.name = name;

		this.age;
		this.height;
		this.weight;
	}

	speak() {
		console.log("Hi, my name is " + this.name);
	}
}

let john = new Person("John");
// console.log(john.name)

let stacy = new Person("Stacy");
// console.log(john, stacy)

// john.speak();
// stacy.speak();


class Circle {
	static fromDiameter(dia) {
		return new Circle(dia/2);
	}

	static fromArea(area) {
		return new Circle(Math.sqrt(area / Math.PI))
	}

	constructor(radius) {
		this.radius = radius;
	}

	get diameter() {
		return this.radius * 2;
	}

	get area() {
		return Math.PI * this.radius**2
	}
}

let c1 = new Circle(4);
// console.log(c1)
// console.log(c1.area)


class Fruit {
	constructor(color, shape, taste) {
		this.color = color;
		this.shape = shape;
		this.taste = taste;
	}

	splat() {
		console.log("Your fruit is now on the floor. Monster.");
	}
}

class Tomato extends Fruit {
	constructor(ripeness) {
		super("red", "round", "mild");

		this.ripeness = ripeness;
	}
}

class Banana extends Fruit {
	constructor(peelability) {
		super("yellow", "curved", "mild");

		if (typeof peelability === "number") {
			this.peelability = peelability;
		} else {
			throw new TypeError("Banana peelability must be a number!");
		}
	}

	brown() {
		this.color = "brown";
	}
}

let myTomato = new Tomato("overripe");
let yourTomato = new Tomato("underride");

yourTomato.color = "green";

// myTomato.splat()

let yourBanana = new Banana(1)
// let alsoYourBanana = new Banana()
yourBanana.brown()
// console.log(yourBanana.ripeness)

function circleFromDia(dia) {
	return new Circle(dia/2);
}

let c3 = circleFromDia(12);

let c4 = Circle.fromDiameter(9);
// console.log(c4)

let c5 = Circle.fromArea(50);
console.log(c5)

// console.log(Banana.brown())
