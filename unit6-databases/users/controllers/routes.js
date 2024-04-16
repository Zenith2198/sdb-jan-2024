import { Router } from "express";
import User from "../models/user.js";
import Post from "../models/post.js";
import jwt from "jsonwebtoken";
import validationMiddleware from "../middleware/validationMiddleware.js";

const router = Router();

//landing page
router.get("/", (request, response) => {
	response.send({ message: "Hello React!" });
});

//add user to database
router.post("/signup", async (request, response) => {
	try {
		//check if username is already taken
		const doesUserExist = await User.exists({
			username: request.body.username
		});

		if (doesUserExist === null) {
			//save user to database
			const user = new User({
				username: request.body.username,
				passwordHash: request.body.passwordHash
			});
			await user.save();

			//sign in user
			const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);

			response.send({
				message: "Success",
				token
			});
		} else {
			response.status(500).send({
				message: "Username was already taken"
			});
		}

	} catch (e) {
		console.log(e)
		response.status(500).send({
			message: e.message
		});
	}
});

//verify user token
router.post("/user", validationMiddleware, (request, response) => {
	console.log(request.user);
	if (request.user) {
		response.send({
			message: "User is logged in",
			loggedIn: true
		});
	} else {
		response.send({
			message: "User is not logged in",
			loggedIn: false
		})
	}

});

//create new post
router.post("/post", validationMiddleware, async (request, response) => {
	try {
		//TODO: check if middleware properly got request.user
		//save post to database
		const post = new Post({
			...request.body,
			userId: request.user._id
		});
		await post.save();

		response.send({
			message: "Post was successfully uploaded"
		});
	} catch (e) {
		response.status(500).send({
			message: e.message
		});
	}
});

export default router;