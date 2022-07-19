import express from "express";
// import upload from "../../utils/multer.js"

const postRouter = express.Router();

import {
  getAllPosts,
  // getPostLikes,
  getOnePost,
  getTimelinePosts,
  likePost,
  // getRelatedPosts,
  postPost,
  removePost,
  searchPostByTitle,
  updateAPost,
} from "./post.controller.js";
import { authorizedAndAdmin, protect } from "../../middleware/auth2.js";
import { upload } from "../../utils/multer.js";

postRouter.post("/create", authorizedAndAdmin, upload.single("file"), postPost);
postRouter.get("/fetch-all", getAllPosts);
postRouter.get("/fetch-one/:id", getOnePost);
postRouter.put(
  "/edit/:id",
  upload.single("file"),
  authorizedAndAdmin,
  updateAPost
);
postRouter.delete("/remove/:id", authorizedAndAdmin, removePost);
postRouter.get("/search", searchPostByTitle);
postRouter.put("/:id/like", protect, likePost);
postRouter.get("/:id/timeline", protect, getTimelinePosts);

export default postRouter;
