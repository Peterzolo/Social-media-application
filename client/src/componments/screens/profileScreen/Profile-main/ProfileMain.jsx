import React from "react";
import Button from "react-bootstrap/Button";
import LeftBarProfile from "../left-profile/LeftBarProfile";
import ProfileCard from "../../../pages/profile/profileCard/ProfileCard";
import PostColumn from "../../../pages/post/PostColumn";
import RightBar from "../right-profile/RightBar";

import "../Profile-main/ProfileMain.css";
const ProfileMain = () => {
  return (
    <div>
      <div className="row gx-3" style={{ position: "relative" }}>
        <div className="col-md-3">
          {" "}
          <LeftBarProfile />{" "}
        </div>
        <div className="col-md-6" style={{marginTop : "5px"}} >
          <div className="p-1">
            <ProfileCard />
          </div>
          <div className="p-2">
            <PostColumn/>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default ProfileMain;
