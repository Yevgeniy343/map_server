import express from "express";
const router = express.Router();
import {
  signup,
  login,
  getAll,
  createMessage,
} from "../controllers/authControllers.js";

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/getAll").get(getAll);
router.route("/createMessage").post(createMessage);

export default router;
