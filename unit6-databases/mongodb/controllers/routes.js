import { Router } from "express";
import { client } from "../db.js";

const router = Router();

router.get("/", async (request, response) => {
	client.connect();
	try {
		const pokemon = client.db("pokeDatabase").collection("pokemon");
		const allPoke = await pokemon.find().toArray();
		response.send(allPoke);
	} catch(err) {
		response.send(err);
	}
	client.close();
});

router.post("/", async (request, response) => {
	client.connect();
	try {
		const pokemon = client.db("pokeDatabase").collection("pokemon");
		await pokemon.insertOne(request.body);
		response.send("New pokemon successfully added to database");
	} catch(err) {
		response.send(err);
	}
	client.close();
});

router.get("/:name", async (request, response) => {
	client.connect();
	try {
		const pokemon = client.db("pokeDatabase").collection("pokemon");
		const requestedPoke = await pokemon.findOne({
			name: request.params.name
		});
		response.send(requestedPoke);
	} catch(err) {
		console.log(err)
		response.send(err);
	}
	client.close();
});

export default router;