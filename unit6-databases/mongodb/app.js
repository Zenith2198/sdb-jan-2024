import express from "express";
import "dotenv/config";
import router from "./controllers/routes.js";

const app = express();
app.use(express.json());
app.use("/", router);

// start the server
app.listen(process.env.PORT, () => {
	console.log(`Server is now listening on port ${process.env.PORT}`);
});