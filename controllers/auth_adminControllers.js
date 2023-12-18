import Admin from "../models/Admin.js";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  UnAuthenticatedError,
} from "../errors/index-errors.js";
import { generate } from "random-words";

const login = async (req, res) => {
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
  // console.log(admin);

  res.status(StatusCodes.OK).json({ admin: login });
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
    res.status(StatusCodes.OK).json({ msg: "Новый пароль отправил" });
  } catch (error) {
    throw new BadRequestError("Error 500");
  }
};

export { login, remindPass };
