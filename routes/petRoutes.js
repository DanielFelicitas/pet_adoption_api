import express from "express";
import { getPets, getPet, createPet, updatePet, deletePet } from "../controllers/petController.js";

const router = express.Router();

router.get("/", getPets);
router.get("/:id", getPet);
router.post("/", createPet);
router.put("/:id", updatePet);
router.delete("/:id", deletePet);

export default router;
