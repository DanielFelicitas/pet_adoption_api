import express from "express";
import { getUsers, createUser, getUserAdoptions } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.get("/:id/adoptions", getUserAdoptions);

export default router;
