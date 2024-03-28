import mongoose from "mongoose";
import Character from "./models/characters.js";

mongoose.connect("mongodb://localhost:27017/starwars");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

try {
	const lukeSkywalker = new Character({
		name: "Luke Skywalker",
		height: "172",
		mass: "77",
		gender: "male"
	});

	await lukeSkywalker.save();
} catch (e) {
	console.log(e);
}