import express from "express";
import { createUsers, getUsers } from "../controllers/userController.js";

const router = express.Router();

router.get("/list", getUsers);
router.post("/create", createUsers);

export default router;
