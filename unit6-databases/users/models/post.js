import { Schema, model } from "mongoose";

const postSchema = new Schema({
	title: String,
	description: String,
	body: String,
	userId: Schema.ObjectId,
	date: {
		type: Date,
		default: Date.now
	}
});

export default model("Post", postSchema);