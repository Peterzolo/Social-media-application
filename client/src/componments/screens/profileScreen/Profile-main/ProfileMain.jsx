import React from "react";
import Button from "react-bootstrap/Button";
import LeftBarProfile from "../left-profile/LeftBarProfile";
import MainSlide from "../middle-profile/MainSlide";

import "../Profile-main/ProfileMain.css";
import RightBar from "../right-profile/RightBar";
const ProfileMain = () => {
  return (
    <div>
      <div className="row gx-2" style={{position : "relative"}}>
        <div className="col-md-3">
          {" "}
          <LeftBarProfile />{" "}
        </div>
        <div className="col-md-6">
          {" "}
          <MainSlide />{" "}
        </div>
        <div className="col-md-3">
          {" "}
          <RightBar />{" "}
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;
