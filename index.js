import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import connectDatabase from "./config/connectData.js";
import config from "./config/config.js";
import route from "./apis/index.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("common"));
app.use(cors());

const PORT = config.port || 3001;

route(app)

connectDatabase()
  .then(() =>
    app.listen(PORT, () => console.log("Pinterest serve on port: ", PORT))
  )
  .catch((error) => console.log("Error: ", error));
