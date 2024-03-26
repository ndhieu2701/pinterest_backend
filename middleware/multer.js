import multer from "multer";
import path from "path";
import { v4 as uuid } from "uuid";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "assets/");
  },
  filename: (req, file, cb) => {
    const newName = uuid() + "-" + Date.now();
    cb(null, newName + path.extname(file.originalname));
  },
});

const upload = multer({ storage, limits: { fileSize: 1024 * 1024 * 2 } });
export default upload;
