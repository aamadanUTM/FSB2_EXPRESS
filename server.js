import express from "express";
import dotenv from "dotenv";
dotenv.config();

// Importing Routes
import homeRoute from "./routes/HomeRoute.js";
import somaliaRoute from "./routes/SomaliaRoutes.js";
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use("/", homeRoute);
app.use("/", somaliaRoute);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
