import React from "react";
import { UilSetting } from "@iconscout/react-unicons";
import "../right-bar/RightBar.css";
import {
  commentPost,
  HomeIcon,
  NotificationBell
} from "../../../data/followers";

const RightBar = () => {
  return (
    <div className="right-bar">
      <div className="nav-icons">
        <img src={HomeIcon} alt="" width="25" />
        <img src={commentPost} alt="" width="25" />
        <img src={NotificationBell} alt="" width="25" />
        <UilSetting />
      </div>
    </div>
  );
};

export default RightBar;
