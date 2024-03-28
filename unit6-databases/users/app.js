import express from "express";
import "dotenv/config";
import router from "./controllers/routes.js";
import mongoose from "mongoose";

//initialize express server
const app = express();
app.use(express.json());
app.use("/", router);

app.listen(process.env.PORT, () => {
	console.log(`Server is now listening on port ${process.env.PORT}`);
});

//create mongoose connection
mongoose.connect("mongodb://localhost:27017/exampleSignup");
const db = mongoose.connection;

db.on("connected", () => {
	console.log("Connected to database");
});
db.on("error", (err) => {
	console.log(err);
});