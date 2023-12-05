import express from "express";
const router = express.Router();
import {
  login,
  remindPass,
  createCategory,
} from "../controllers/adminControllers.js";

router.route("/login").post(login);
router.route("/remind_pass").post(remindPass);
router.route("/create_category").post(createCategory);

export default router;
