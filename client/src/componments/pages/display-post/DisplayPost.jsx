import React from "react";
import { postData } from "../../../data/followers";
import PostDetails from "../post-detail/PostDetails";

import "../display-post/DisplayPost.css";

const DisplayPost = () => {
  return (
    <div>
      {postData.map(item => (
        <div className="display-container" key={item.id}>
          <PostDetails {...item} />
        </div>
      ))}
    </div>
  );
};

export default DisplayPost;
