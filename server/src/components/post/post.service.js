import { findPostById, findPostByName, savePostPayload } from "./post.dao.js";
import ApiError from "../../error/ApiError.js";

export const createPost = async ({
  title,
  description,
  user,
  image,
  cloudinary_id,
  createdAt,
  status,
}) => {
  const postObject = {
    title,
    description,
    user,
    image,
    cloudinary_id,
    createdAt,
    status,
  };

  const postExists = await findPostByName({ title });

  if (postExists) {
    throw ApiError.alreadyExists({
      message: "Post with this title has already been created",
    });
  }

  const post = await savePostPayload(postObject);
  return {
    createdAt: new Date().toISOString(),
    title: post.title,
    image: post.image,
    user: post.user,
    cloudinary_id: post.cloudinary_id,
    description: post.description,
    status: post.status,
    _id: post._id,
  };
};
