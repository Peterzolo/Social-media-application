import React from "react";
import { postData } from "../../../data/followers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PostDetails from "../post-detail/PostDetails";
import { getTimelinePostAction } from "../../../redux/actions/postActions";
import "../display-post/DisplayPost.css";

const DisplayPost = () => {
  const userSignIn = useSelector(state => state.userAuth);
  const { userInfo, isLoading, error } = userSignIn;
  const user = userInfo;

  const newPosts = useSelector(state => state.posts);
  const { loading, posts } = newPosts;
  const allPosts = posts;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTimelinePostAction(user._id));
  }, []);

  return (
    <div>
      {allPosts &&
        allPosts.map(item => (
          <div className="display-container" key={item._id}>
            <PostDetails {...item} />
          </div>
        ))}
    </div>
  );
};

export default DisplayPost;
