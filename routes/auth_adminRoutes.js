import express from "express";
const router = express.Router();
import { login } from "../controllers/auth_adminControllers.js";

router.route("/login").post(login);

export default router;
