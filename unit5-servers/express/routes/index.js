import { Router } from "express";
const router = Router();
import { dirname } from "path";
// import { fileURLToPath } from 'url';

// handle the get request on the home page
router.get("/", (request, response) => {
	// const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
	const rootDir = dirname(import.meta.dirname);
	response.sendFile("views/index.html", { root: rootDir });
});

export default router;