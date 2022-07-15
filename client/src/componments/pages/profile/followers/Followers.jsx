import React from "react";
import { followers } from "../../../../data/followers";
import "../followers/Followers.css";
const Followers = () => {
  return (
    <div className="follower-card-container">
     <div className="follower-title"><h3>Your Followers</h3></div> 
      {followers.map(follower => (
        <div className="follower" key={follower.id}>
          <div>
            <img src={follower.img} alt="" className="follower-image" />
            <div className="follower-name">
              <span>{`${follower.firstName}  ${follower.lastName}` }</span>
              <span>@{follower.username}</span>
            </div>
          </div>
          <button type="button" className="button">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default Followers;
