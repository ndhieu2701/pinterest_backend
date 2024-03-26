import jwt from "jsonwebtoken";
import config from "../config/config";

const verifyOptionalToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");

    if (!token) return next();

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    const verified = jwt.verify(token, config.secretAuth, (error, decode) => {
      if (error.name === "TokenExpiredError") {
        return res.status(401).json({ status: 403, message: "Token expired!" });
      } else
        return res
          .status(503)
          .json({ status: 403, message: "Token verified error!" });
    });
    req.user = verified;
    next();
  } catch (error) {
    console.log("Error: ", error);
  }
};

const verifyRequiredToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");

    if (!token)
      return res.status(401).json({ status: 401, message: "Unauthorized!" });

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    const verified = jwt.verify(token, config.secretAuth, (error, decode) => {
      if (error.name === "TokenExpiredError") {
        return res.status(401).json({ status: 401, message: "Token expired!" });
      } else
        return res
          .status(503)
          .json({ status: 403, message: "Token verified error!" });
    });
    req.user = verified;
    next();
  } catch (error) {
    console.log("Error: ", error);
  }
};

export { verifyOptionalToken, verifyRequiredToken };
