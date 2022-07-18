import React, { useState } from "react";
import { UilSetting } from "@iconscout/react-unicons";
import "../right-bar/RightBar.css";
import {
  commentPost,
  HomeIcon,
  NotificationBell
} from "../../../data/followers";
import Trendcard from "../trending/Trendcard";
import ShareModal from "../shareModal/ShareModal";

const RightBar = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="right-bar">
      <div className="nav-icons">
        <img src={HomeIcon} alt="" width="20" />
        <img src={commentPost} alt="" width="20" />
        <img src={NotificationBell} alt="" width="20" />
        <UilSetting />
      </div>
      <Trendcard />

      <div className="share">
        <button className="button r-share" onClick={() => setModalOpened(true)}>
          Share
        </button>
        <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
      </div>
    </div>
  );
};

export default RightBar;
