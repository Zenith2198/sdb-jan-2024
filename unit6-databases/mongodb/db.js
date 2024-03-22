import { MongoClient } from "mongodb";

export const client = new MongoClient("mongodb://localhost:27017");
// await client.connect();

// export async function getPokemonColl() {
// 	return client.db("pokeDatabase").collection("pokemon");
// }