import express from "express";
const router = express.Router();
import {
  createCategory,
  getCategories,
} from "../controllers/adminControllers.js";

router.route("/create_category").post(createCategory);
router.route("/get_categories").get(getCategories);

export default router;
