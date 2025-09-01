import express from "express";
import {
  getAllSomaliaStatesController,
  getAllSomaliaStatesByIDController,
  createSomaliaStateController,
} from "../controller/SomaliaController.js";
const router = express.Router();

router.get("/states", getAllSomaliaStatesController);
router.get("/states/:id", getAllSomaliaStatesByIDController);
router.post("/states", createSomaliaStateController);

export default router;
