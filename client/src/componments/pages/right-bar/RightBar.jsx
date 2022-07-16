import React from "react";
import { UilSetting } from "@iconscout/react-unicons";
import "../right-bar/RightBar.css";
import {
  commentPost,
  HomeIcon,
  NotificationBell
} from "../../../data/followers";
import Trendcard from "../trending/Trendcard";

const RightBar = () => {
  return (
    <div className="right-bar">
      <div className="nav-icons">
        <img src={HomeIcon} alt="" width="20" />
        <img src={commentPost} alt="" width="20" />
        <img src={NotificationBell} alt="" width="20" />
        <UilSetting />
      </div>
      <Trendcard/>
      <div className="share">
        <button className="button r-share">Share</button>
      </div>
    </div>
  );
};



export default RightBar;
