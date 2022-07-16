import React from "react";
import {
  commentPost,
  likedpost,
  sharePost,
  unLikedPost
} from "../../../data/followers";
import "../post-detail/PostDetails.css";

const PostDetails = ({ ...item }) => {
  return (
    <div className="post">
      <img src={item.image} alt="" />
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
