import express from "express";
const router = express.Router();
import { login, remindPass } from "../controllers/adminControllers.js";

router.route("/login").post(login);
router.route("/remind_pass").post(remindPass);

export default router;
