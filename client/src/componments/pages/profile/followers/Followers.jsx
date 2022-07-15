import React from "react";
import { followers } from "../../../../data/followers";
import "../followers/Followers.css";
const Followers = () => {
  return (
    <div>
      <h3>Your Followers</h3>

      {followers.map(follower => (
        <div className="followers" key={follower.id}>
          <div>
            <img src={follower.img} alt="" />
            <div className="follower-name">
              <span>{follower.name}</span>
              <span>{follower.username}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Followers;
