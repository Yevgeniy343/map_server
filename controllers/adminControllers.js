import Admin from "../models/Admin.js";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  UnAuthenticatedError,
} from "../errors/index-errors.js";
import { generate } from "random-words";
import { nanoid } from "nanoid";
import { bot } from "../bot.js";
const channelId = -4018916107;

const login = async (req, res) => {
  console.log(req.body);
  bot.sendMessage(channelId, "Вход в админ панель");

  const { login, password } = req.body;

  if (!login || !password) {
    throw new BadRequestError("Введите все значения");
  }
  const admin = await Admin.findOne({ login });

  if (!admin) {
    throw new UnAuthenticatedError("Не корректные данные");
  }
  if (password !== admin.password) {
    throw new UnAuthenticatedError("Не корректные данные");
  }
  console.log(admin);
  res.status(StatusCodes.OK).json({ admin: login });
};

const remindPass = async (req, res) => {
  try {
    const word = generate({ minLength: 4, maxLength: 6 });
    const number = Math.floor(Math.random() * 8999 + 1000);
    const new_pass = word + number;
    console.log(new_pass);
    let admin = await Admin.findOne({});
    console.log(admin);
    bot.sendMessage(channelId, new_pass);
  } catch (error) {
    throw new BadRequestError("Error 500");
  }
};

export { login, remindPass };
