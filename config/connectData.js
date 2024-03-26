import mongoose from "mongoose";
import config from "./config.js";

const connectDatabase = async () => {
  const connect = await mongoose.connect(config.mongo_uri, {
    ssl: true,
    tlsAllowInvalidCertificates: true,
  });
  console.log("Connect to Pinterest Clone database: ", connect.connection.host);
};

export default connectDatabase;
