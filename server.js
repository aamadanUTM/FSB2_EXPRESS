import express from "express";
import homeRoute from "./routes/HomeRoute.js";
const app = express();
const port = 3000;
app.use(express.json());
app.use("/", homeRoute);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
