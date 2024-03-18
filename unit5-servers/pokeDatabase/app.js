import pokemon from "./pokemon.json" with { type: "json" };
import express from "express";
import indexController from "./controllers/index.js";

const app = express();
app.use(express.json());

const port = 3000;

app.use("/", indexController);

// start the server
app.listen(port, () => {
	console.log(`Example Express app is now listening on port ${port}`);
});
