import Admin from "../models/Admin.js";
import Object from "../models/Object.js";
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

const createObject = async (req, res) => {
  console.log(req.body);
  const { name, subcategory, lat, long, address, contacts, r1, r2, r3, r4 } =
    req.body;
  try {
    const object = await Object.create({
      name,
      subcategory,
      address,
      contacts,
      location: { lat, long },
      reviews: { r1, r2, r3, r4 },
    });
    res.status(StatusCodes.OK).json(object);
  } catch (error) {
    throw new BadRequestError("Error 500");
  }
};

const getObjects = async (req, res) => {
  try {
    let objects = await Object.find({});
    res.status(StatusCodes.OK).json(objects);
  } catch (error) {
    throw new BadRequestError("Error 500");
  }
};

const addInfo1 = async (req, res) => {
  try {
    let object = await Object.findById(req.body.objectId);
    object.info1.push(req.body.info1);
    await object.save();
    let objects = await Object.find({});
    res.status(StatusCodes.OK).json(objects);
  } catch (error) {
    throw new BadRequestError("Error 500");
  }
};
const addInfo2 = async (req, res) => {
  console.log(req.body);
  try {
    let object = await Object.findById(req.body.objectId);
    object.info2.push(req.body.info2);
    await object.save();
    let objects = await Object.find({});
    res.status(StatusCodes.OK).json(objects);
  } catch (error) {
    throw new BadRequestError("Error 500");
  }
};

const uploadImage = async (req, res) => {
  console.log(req.body);
  console.log(req.file);
  try {
    let object = await Object.findById(req.body.objectId);
    object.image.push(req.file.path);
    await object.save();
    let objects = await Object.find({});
    res.status(StatusCodes.OK).json(objects);
  } catch (error) {
    throw new BadRequestError("Error 500");
  }
};

export {
  createCategory,
  getCategories,
  createSubCategory,
  createObject,
  getObjects,
  addInfo1,
  addInfo2,
  uploadImage,
};
