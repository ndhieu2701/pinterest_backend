import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT,
  mongo_uri: process.env.MONGO_URI,
  secretAuth: process.env.SECRET_AUTH,
  cloudName: process.env.CLOUD_NAME,
  cloudApiKey: process.env.CLOUD_API_KEY,
  cloudApiSecret: process.env.CLOUD_API_SECRET,
  pathApi: process.env.PATH_API
};

export default config;
