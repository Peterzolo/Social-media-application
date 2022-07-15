import React from "react";

import "../home/Home.css";
import PostColumn from "../post/PostColumn";
import ProfileIndex from "../profile/ProfileIndex";

const Home = () => {
  return (
    <div className="home">
      <ProfileIndex />
      <PostColumn />
      <div className="riht-home">Right bar</div>
    </div>
  );
};

export default Home;
