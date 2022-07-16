import React from "react";

import "../home/Home.css";
import PostColumn from "../post/PostColumn";
import ProfileIndex from "../profile/ProfileIndex";
import RightBar from "../right-bar/RightBar";

const Home = () => {
  return (
    <div className="home">
      <div className="row gx-3">
        <div className="col-md-3">
          <div className="p-2">
            <ProfileIndex />
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-2">
            <PostColumn />
          </div>
        </div>
        <div className="col-md-3">
          <div className="p-2">
            <RightBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
