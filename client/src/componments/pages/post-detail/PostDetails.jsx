import React from "react";
import "../post-detail/PostDetails.css";

const PostDetails = ({...item}) => {
  return (
    <div>
      <h3>{item.name}</h3>
    </div>
  );
};

export default PostDetails;
