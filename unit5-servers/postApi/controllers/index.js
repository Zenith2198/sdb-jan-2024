import { Router } from "express";
const router = Router();

router.get("/", (request, response) => {
	response.send("Welcome home!");
});

export default router;