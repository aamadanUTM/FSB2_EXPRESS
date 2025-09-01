import express from "express";
import { getHome, postHome } from "../controller/HomeController.js";
const router = express.Router();

router.get("/", getHome);

router.post("/", postHome);

export default router;
