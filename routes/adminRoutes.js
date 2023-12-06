import express from "express";
const router = express.Router();
import {
  login,
  remindPass,
  createCategory,
  getCategories,
} from "../controllers/adminControllers.js";

router.route("/login").post(login);
router.route("/remind_pass").post(remindPass);

router.route("/create_category").post(createCategory);
router.route("/get_categories").get(getCategories);

export default router;
