import jwt from "jsonwebtoken";
import { UnAuthenticatedError } from "../errors/index-errors.js";

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnAuthenticatedError("Authentication провалена1");
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, "jwtSecret");
    req.user = { userId: payload.userId };
    next();
  } catch (error) {
    throw new UnAuthenticatedError("Authentication провалена2");
  }
};
export default auth;
