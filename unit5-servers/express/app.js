import express from "express";
const app = express();
import indexRouter from "./routes/index.js";
import testRouter from "./routes/test.js";

const port = 3000;

// app.use(express.static("."));

// set routes from handlers
app.use("/", indexRouter);
app.use("/test", testRouter);

// start the server
app.listen(port, () => {
	console.log(`Example Express app is now listening on port ${port}`);
});