import pokemon from "../pokemon.json" with { type: "json" };
import { Router } from "express";
import { writeFile } from "fs";

const router = Router();

router.get("/", (request, response) => {
	response.send(pokemon);
});

router.get("/:name", (request, response) => {
	const requestedPoke = pokemon.find((ele) => ele.name == request.params.name.toLowerCase());

	if (requestedPoke) {
		response.send(requestedPoke);
	} else {
		response.send("No Pokemon found with that name!");
	}
});

router.post("/", (request, response) => {
	const requestedPoke = pokemon.some((ele) => ele.name == request.body.name || ele.id == request.body.id);

	if (requestedPoke) {
		response.send("Pokemon already exists in database!");
	} else {
		pokemon.push(request.body);
		writeFile("./pokemon.json", JSON.stringify(pokemon, null, 4), (err) => {
			if (err) {
				response.send("Error occurred");
			} else {
				response.send("New Pokemon successfully added!");
			}
		});
	}
});

router.delete("/:name", (request, response) => {
	const requestedPokeIndex = pokemon.findIndex((ele) => ele.name == request.params.name);

	if (requestedPokeIndex === -1) {
		response.send("No Pokemon found with that name!");
	} else {
		pokemon.splice(requestedPokeIndex, 1);
		writeFile("./pokemon.json", JSON.stringify(pokemon, null, 4), (err) => {
			if (err) {
				response.send("Error occurred");
			} else {
				response.send("Pokemon successfully deleted!");
			}
		});
	}
});

router.post("/:name", (request, response) => {
	// get the pokemon we are trying to change
	const requestedPokeIndex = pokemon.findIndex((ele) => {
		return ele.name == request.params.name;
	});
	// access height of pokemon
	// use index to access pokemon from array
	// console.log(pokemon[requestedPokeIndex].height)

	// change height of pokemon
	console.log(request.body)
	// pokemon[requestedPokeIndex].height = request.params.height;
	// pokemon[requestedPokeIndex].weight = request.params.weight;

	// write it to a file
	writeFile("./pokemon.json", JSON.stringify(pokemon, null, 4), () => {
		response.send("Pokemon was changed!");
	});
});


export default router;