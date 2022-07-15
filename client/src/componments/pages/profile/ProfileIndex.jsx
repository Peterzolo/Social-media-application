import React from "react";
import Followers from "./followers/Followers";
import LogoSearch from "./logoSearch/LogoSearch";
import ProfileCard from "./profileCard/ProfileCard";

const ProfileIndex = () => {
  return (
    <div className="profile-container">
      <LogoSearch />
      <ProfileCard />
      <Followers />
    </div>
  );
};

export default ProfileIndex;
