const app = express();
import express from "express";
import cors from "cors";
import morgan from "morgan";

import { componentModule } from "../src/components/index.js";


// app.use(express.static('public')); 
// app.use('/images', express.static('images'));

app.use(morgan("dev"));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/api/user", componentModule.userModule.routes);
app.use("/api/post", componentModule.postModule.routes);
app.use("/api/upload", componentModule.uploadModule.routes);

export default app;
