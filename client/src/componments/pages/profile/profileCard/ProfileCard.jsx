import React from "react";
import SocialImageTwo from "../../../../img/social-image002.png";
import SocialImageThree from "../../../../img/social-image003.png";
import LuxuryHome from "../../../../img/Luxury-Home.png";

import "../profileCard/ProfileCard.css";

const ProfileCard = () => {
  const profilePage = true;
  return (
    <div className="profile-card" style={{ marginTop: "30px" }}>
      <div className="profile-images">
        <img src={LuxuryHome} alt="" />
        <img src={SocialImageTwo} alt="" />
      </div>
      <div className="profile-name">
        <span>Boostar Homes Limited</span>
        <span>Luxury Real Estate Manager</span>
      </div>

      <div className="follow-status">
        <hr />
        <div>
          <div className="follow">
            <span>Followings</span>
            <span>3000</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>Followers</span>
            <span>2.5million</span>
          </div>

          {profilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>20</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>

      {profilePage ? (
        ""
      ) : (
        <div className="my-profile">
          <div className="my">My</div>
          <div className="prof">Profile</div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
