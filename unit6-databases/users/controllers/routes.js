import { Router } from "express";
import User from "../models/user.js";
import Post from "../models/post.js";
import { hash } from "bcrypt";
import jwt from "jsonwebtoken";
import validationMiddleware from "../middleware/validationMiddleware.js";

const router = Router();

//landing page
router.get("/", (request, response) => {
	response.send("Hi"); //TODO: change to sending JSON
});

//add user to database
router.post("/signup", async (request, response) => {
	try {
		//check if username is already taken
		const doesUserExist = await User.exists({
			username: request.body.username
		});

		if (doesUserExist === null) {
			//hash password
			//NOTE: this should be done client side, not server side
			hash(request.body.password, 10, async (err, passwordHash) => {
				if (err) {
					response.send(err);
				} else {
					//save user to database
					const user = new User({
						username: request.body.username,
						passwordHash
					});
					await user.save();

					//sign in user
					const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: 3*60*60 });

					response.send({
						message: "Success",
						token
					});
				}
			});
		} else {
			response.send("Username was already taken"); //TODO: change to sending error code with JSON
		}

	} catch (e) {
		response.send(e.message); //TODO: change to sending error code with JSON
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