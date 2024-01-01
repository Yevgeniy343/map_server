import express from "express";
const router = express.Router();
import { signup, login, getAll } from "../controllers/authControllers.js";

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/getAll").get(getAll);

export default router;
