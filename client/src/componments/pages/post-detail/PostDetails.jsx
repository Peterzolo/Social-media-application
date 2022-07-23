import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  commentPost,
  likedpost,
  sharePost,
  unLikedPost
} from "../../../data/followers";
import "../post-detail/PostDetails.css";

const PostDetails = ({ ...item }) => {
  const userSignIn = useSelector(state => state.userAuth);
  const { userInfo, isLoading, error } = userSignIn;
  const user = userInfo && userInfo.result;

  const newPosts = useSelector(state => state.posts);
  const { loading, posts } = newPosts;

  const dispatch = useDispatch();
  // const imageFolder = "http://localhost:5000/src/public/image/"
  // console.log('IMAGE FOLDER', imageFolder)

  return (
    <div className="post">
      <img
        src={item.image ? process.env.REACT_APP_PUBLIC_FOLDER + item.image : ""}
        alt=""
      />

      {console.log("ITEM IMAGE", item.image)}
      {/* <img src={item.image ? "http://localhost:5000/src/public/images/" + item.image : "" } alt="" /> */}
      <div>
        <img
          src={item.liked ? likedpost : unLikedPost}
          alt=""
          width="30"
          className="liked-post"
        />
        <img src={commentPost} alt="" width="30" className="comment-post" />
        <img src={sharePost} alt="" width="30" className="share-post" />
      </div>
      <div className="like-count"> {item.likes} Likes </div>
      <div className="post-des-container">
        <span>
          <b>{item.name} |</b>{" "}
        </span>
        <span>{item.description}</span>
      </div>
    </div>
  );
};

export default PostDetails;
