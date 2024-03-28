import { Schema, model } from "mongoose";

const charactersSchema = new Schema({
	name: String,
	height: String,
	mass: String,
	gender: String
});

export default model("Character", charactersSchema);