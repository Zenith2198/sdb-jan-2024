import express from "express";
import indexController from "./controllers/index.js";
import numberController from "./controllers/number.js";

const app = express();
app.use(express.json());

const port = 3000;

app.use("/", indexController);
app.use("/number", numberController);

// start the server
app.listen(port, () => {
	console.log(`Example Express app is now listening on port ${port}`);
});
