import { Router } from "express";
const router = Router();
// import { dirname } from "path";
// import { fileURLToPath } from 'url';
import pokemon from "../pokemon.json" with { type: "json" };

// handle the get request on the home page
router.get("/", (request, response) => {
	// const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
	// const rootDir = dirname(import.meta.dirname);
	// response.sendFile("views/index.html", { root: rootDir });
	// console.log(pokemon)
	response.send(pokemon);
});

export default router;