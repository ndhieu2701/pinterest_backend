import jwt from "jsonwebtoken";
import config from "./config.js";

export const genTokenAuth = (id) => {
  return jwt.sign({ id }, config.secretAuth);
};
