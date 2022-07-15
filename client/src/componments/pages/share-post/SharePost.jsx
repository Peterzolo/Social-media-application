import React, { useState, useRef } from "react";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { Luxury } from "../../../data/followers";

import "../share-post/SharePost.css";
const SharePost = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const handleImageChange = e => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  };
  return (
    <div className="sharePost">
      <img src={Luxury} alt="" />
      <div className="text-input">
        <input type="text" placeholder="#What is on your MIND ?" />
        <div className="post-options">
          <div className="option">
            <div className="option-label">Photo</div>
            <UilScenery
              style={{ color: "#1890ff", cursor: "pointer" }}
              onClick={() => imageRef.current.click()}
            />
          </div>
          <div className="option">
            <div className="option-label">Video</div>
            <UilPlayCircle style={{ color: "#d4380d" }} />
          </div>
          <div className="option">
            <div className="option-label">Location</div>
            <UilLocationPoint style={{ color: "#5b8c00" }} />
          </div>
          <div className="option">
            <div className="option-label">Schedule</div>
            <UilSchedule style={{ color: "#ad6800" }} />
          </div>

          <div className="option">
            <div className="option-label">Share</div>
            <button type="button" className="button button-share">
              <i className="bi bi-share-fill"></i>
            </button>
          </div>

          <div className="file">
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={handleImageChange}
            />
          </div>
        </div>

        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} className ="times" />
            <img src={URL.createObjectURL(image)} alt="preview" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SharePost;
