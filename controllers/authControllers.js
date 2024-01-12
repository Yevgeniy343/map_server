import User from "../models/Users.js";
import Object from "../models/Object.js";
import Category from "../models/Category.js";
import SubCategory from "../models/SubCategory.js";
import Message from "../models/Message.js";
import { StatusCodes } from "http-status-codes";

import {
  BadRequestError,
  UnAuthenticatedError,
} from "../errors/index-errors.js";

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("Введите все значения");
  }
  const userAlreadyExist = await User.findOne({ email });
  if (userAlreadyExist) {
    throw new BadRequestError("Email уже используется");
  }
  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      name: user.name,
      _id: user._id,
    },
    token,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Введите все значения");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnAuthenticatedError("Не корректные данные");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("Не корректные данные");
  }
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user, token });
};

const getAll = async (req, res) => {
  try {
    let categories = await Category.find({});
    let objects = await Object.find({});
    let subCategories = await SubCategory.find({});
    let messages = await Message.find({});
    res
      .status(StatusCodes.OK)
      .json({ categories, subCategories, objects, messages });
  } catch (error) {
    throw new BadRequestError("Error 500");
  }
};

const createMessage = async (req, res) => {
  console.log(req.body);
  const { name, message, objectId } = req.body;
  try {
    const messages = await Message.create({ name, message, objectId });
    res.status(StatusCodes.OK).json(messages);
  } catch (error) {
    throw new BadRequestError("Error 500");
  }
};

export { signup, login, getAll, createMessage };
