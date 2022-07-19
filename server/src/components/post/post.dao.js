import Post from './post.model.js';

export const savePostPayload = async (args) => {
  const payload = await Post.create(args);
  return payload;
};

export const fetchAllPosts = async () => {
  const Post = await Post.find({ status: 'active' }).populate("user", "-password");
  return Post;
};

export const findPostById = async (id) => {
  const Post = await Post.findById({ _id: id, status: 'active' }).populate("user", "-password");
  return Post;
};

// export const findOnePost = async(id) =>{
//   const Post = await Post.findById({_id : id})
//   return Post
// }

export const findPostByName = async (query) => {
  const Post = await Post.findOne(query).populate("user", "-password");
  return Post;
};

export const updatePost = async (id, PostObj) => {
  const Post = await Post.findByIdAndUpdate(
    { _id: id },
    { $set: PostObj },
    { new: true }
  );
  return Post;
};

export const deletePost = async (id, userId) => {
  const Post = await Post.findByIdAndUpdate(
    { _id: id, user: userId },
    { $set: { status: 'inactive' } },
    { new: true }
  );
  return Post;
};

export const findPostOwnerById = async (id) => {
  const Post = await Post.find({ status: 'active', vendor: id }).populate(
    'user',
    '-password'
  );
  return Post;
};
