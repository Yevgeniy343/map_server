import Admin from "../models/Admin.js";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  UnAuthenticatedError,
} from "../errors/index-errors.js";
import { generate } from "random-words";
import { bot } from "../bot.js";
const channelId = -4018916107;

const login = async (req, res) => {
  console.log(req.body);

  const { login, password } = req.body;

  if (!login || !password) {
    throw new BadRequestError("Введите все значения");
  }
  const admin = await Admin.findOne({ login });

  if (!admin) {
    throw new UnAuthenticatedError("Не корректные данные");
  }
  const isPasswordCorrect = await admin.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("Не корректные данные");
  }
  const token = admin.createJWT();
  bot.sendMessage(channelId, "Вход в админ панель");
  res.status(StatusCodes.OK).json({ admin: login, token });
};

const remindPass = async (req, res) => {
  try {
    const word = generate({ minLength: 4, maxLength: 6 });
    const number = Math.floor(Math.random() * 8999 + 1000);
    const new_pass = word + number;
    let admin = await Admin.findOne({});
    if (!admin) {
      throw new Error("Admin not found");
    }
    admin.password = new_pass;
    await admin.save();
    const channelId = process.env.CHANNEL_ID;
    bot.sendMessage(channelId, `Новый пароль: \n ${new_pass}`);
    res.status(StatusCodes.OK).json({ msg: "Новый пароль отправил" });
  } catch (error) {
    throw new BadRequestError("Error 500");
  }
};

export { login, remindPass };