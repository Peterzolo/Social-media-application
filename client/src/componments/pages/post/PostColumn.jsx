import React from "react";
import SharePost from "../share-post/SharePost";

import "../post/PostColumn.css";
import DisplayPost from "../display-post/DisplayPost";
const PostColumn = () => {
  return (
    <div className="post-column">
      <SharePost />
      <DisplayPost/>
    </div>
  );
};

export default PostColumn;
