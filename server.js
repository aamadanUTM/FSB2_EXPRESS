import express from "express";
import dotenv from "dotenv";
dotenv.config();
//Middleware
import { AuthMiddleware } from "./middleware/AuthMiddleware.js";

// Importing Routes
import homeRoute from "./routes/HomeRoute.js";
import somaliaRoute from "./routes/SomaliaRoutes.js";
import authRoute from "./routes/AuthRoutes.js";
const app = express();

const port = process.env.PORT;

app.use(express.json());

app.use("/", authRoute);
app.use("/", homeRoute);
app.use("/", AuthMiddleware, somaliaRoute);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
