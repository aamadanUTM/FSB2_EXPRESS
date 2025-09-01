import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("POST request to the homepage");
});

export default router;
