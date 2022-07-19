import express from 'express';
// import upload from "../../utils/multer.js"

const postRouter = express.Router();

import {
  editPost,
  getAllPosts,
  getPostLikes,
  getOnePost,
  getRelatedPosts,
  postPost,
  removePost,
  searchPostByTitle,
} from './post.controller.js';
import { authorizedAndAdmin, protect } from '../../middleware/auth2.js';
import { upload } from '../../utils/multer.js';

postRouter.post('/create', authorizedAndAdmin,upload.single("file"), postPost);
postRouter.get('/fetch-all', getAllPosts);
postRouter.get('/fetch-one/:id', getOnePost);
postRouter.put('/edit/:id',upload.single("image"), authorizedAndAdmin, editPost);
postRouter.delete('/remove/:id', authorizedAndAdmin, removePost);
postRouter.get('/search', searchPostByTitle);
postRouter.post('/related-posts', getRelatedPosts);
postRouter.patch('/like/:id', getPostLikes);

export default postRouter;