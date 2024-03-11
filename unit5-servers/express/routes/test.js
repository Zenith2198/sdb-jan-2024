import { Router } from "express";
const router = Router();

// handle the get request on the test page
router.get("/:param", (request, response) => {
	console.log(request.params)
	console.log(request.query)
	response.send("Hello test!");
});

export default router;