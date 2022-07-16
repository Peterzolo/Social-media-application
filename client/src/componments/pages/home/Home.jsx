import React from "react";

import "../home/Home.css";
import PostColumn from "../post/PostColumn";
import ProfileIndex from "../profile/ProfileIndex";
import RightBar from "../right-bar/RightBar";

const Home = () => {
  return (
    <div className="home">
      <ProfileIndex />
      <PostColumn />
       <RightBar/>
    </div>
  );
};

export default Home;
