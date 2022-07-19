export const updateAPost = async (req, res) => {
  const id = req.params.id;
  const userId = req.user._id;
  const updateObj = req.body;

  try {
    const user = await findUserById(userId);
    const findPost = await findPostById(id);
    console.log("USER", user);
    console.log("FIND POST", findPost);

    if (findPost.user._id === user._id.toString() || user.isAdmin === true) {
      const updatedPost = await updatePost(id, updateObj);

      res.send({
        success: true,
        message: "Post successfully updated",
        result: updatedPost,
      });
    } else {
      throw ApiError.forbidden({ message: "You are not authorized" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
