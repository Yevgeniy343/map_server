import Admin from "../models/Admin.js";
import Category from "../models/Category.js";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  UnAuthenticatedError,
} from "../errors/index-errors.js";

const createCategory = async (req, res) => {
  console.log(req.body);
  const { parentId, name, type } = req.body;
  if (!parentId && parentId !== null) {
    throw new BadRequestError("Не указан родительский элемент");
  }
  try {
    const category = await Category.create({ name, parentId, type });
    res.status(StatusCodes.OK).json(category);
  } catch (error) {
    throw new BadRequestError("Error 500");
  }
};

const getCategories = async (req, res) => {
  console.log(req.body);
  try {
    let categories = await Category.find({});
    res.status(StatusCodes.OK).json(categories);
  } catch (error) {
    throw new BadRequestError("Error 500");
  }
};

export { createCategory, getCategories };
