import React from "react";
import { postData } from "../../../data/followers";
import PostDetails from "../post-detail/PostDetails";

const DisplayPost = () => {
  return (
    <div>
      {
        postData.map( (item) =>(
            <div className="display-container">
                <PostDetails/>
            </div>
        ))
      }
    </div>
  );
};

export default DisplayPost;
