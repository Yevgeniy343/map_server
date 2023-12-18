import Admin from "../models/Admin.js";
import Category from "../models/Category.js";
import SubCategory from "../models/SubCategory.js";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  UnAuthenticatedError,
} from "../errors/index-errors.js";

const createCategory = async (req, res) => {
  console.log(req.body);
  const { name } = req.body;

  try {
    const category = await Category.create({ name });
    res.status(StatusCodes.OK).json(category);
  } catch (error) {
    throw new BadRequestError("Error 500");
  }
};

const getCategories = async (req, res) => {
  console.log(req.body);
  try {
    let categories = await Category.find({});
    let subCategories = await SubCategory.find({});
    res.status(StatusCodes.OK).json({ categories, subCategories });
  } catch (error) {
    throw new BadRequestError("Error 500");
  }
};

const createSubCategory = async (req, res) => {
  console.log(req.body);
  const { name, categoryId } = req.body;
  try {
    const subCategory = await SubCategory.create({ name, categoryId });
    res.status(StatusCodes.OK).json(subCategory);
  } catch (error) {
    throw new BadRequestError("Error 500");
  }
};

export { createCategory, getCategories, createSubCategory };
