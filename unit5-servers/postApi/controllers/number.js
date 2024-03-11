import { Router } from "express";
const router = Router();

router.post("/", (request, response) => {
	console.log("request receieved");

	const number = request.body.number;

	response.send(`good job! you sent the number ${number}`);
});

export default router;