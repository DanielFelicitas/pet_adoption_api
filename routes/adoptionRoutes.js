import express from "express";
import { getAdoptions, createAdoption, updateAdoption } from "../controllers/adoptionController.js";

const router = express.Router();

router.get("/", getAdoptions);
router.post("/", createAdoption);
router.put("/:id", updateAdoption);

export default router;
