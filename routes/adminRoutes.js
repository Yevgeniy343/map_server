import express from "express";
const router = express.Router();
import {
  createCategory,
  getCategories,
  createSubCategory,
  createObject,
  getObjects,
  addInfo1,
  addInfo2,
  uploadImage,
} from "../controllers/adminControllers.js";
import fileUpload from "../middleware/file-upload.js";

router.route("/create_category").post(createCategory);
router.route("/create_subcategory").post(createSubCategory);
router.route("/get_categories").get(getCategories);
router.route("/create_object").post(createObject);
router.route("/get_objects").get(getObjects);
router.route("/addInfo1").post(addInfo1);
router.route("/addInfo2").post(addInfo2);
router.route("/uploadImage").post(fileUpload.single("image"), uploadImage);

export default router;
