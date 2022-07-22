import express from "express";
import { imageUpload } from "./controller.js";
const uploadRouter = express.Router();

import { upload } from "./multer-config/index.js";

uploadRouter.post("/create", upload.single("file"), imageUpload);

export default uploadRouter;
