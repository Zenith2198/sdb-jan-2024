import jwt from "jsonwebtoken";
import User from "../models/user.js";

//TODO: error handling for if JWT is invalid or user does not exist
export default async function validationMiddleware(request, response, next) {
	//decrypt JWT
	console.log(request.headers)
	const decryptedToken = jwt.verify(request.headers.authorization, process.env.SECRET_KEY);

	//get user from ID that was in JWT
	const user = await User.findById(decryptedToken.id);
	if (!user) {
		throw new Error("ID from JWT does not correspond to User in database");
	}
	request.user = user;

	return next();
}