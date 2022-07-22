import React, { useState, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { Luxury, sharePost } from "../../../data/followers";

import "../share-post/SharePost.css";
import { imageUploadAction } from "../../../redux/actions/uploadActions";
import { postUploadAction } from "../../../redux/actions/postActions";
const SharePost = () => {
  // const loading = useSelector((state) => state.postReducer.uploading);
  const dispatch = useDispatch();
  const userSignIn = useSelector(state => state.userAuth);
  const { userInfo, isLoading, error } = userSignIn;
  const user = userInfo&&userInfo.result;


  const [image, setImage] = useState(null);
  const desc = useRef();
  const handleImageChange = e => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  };

  const imageRef = useRef();

  const handleUpload = e => {
    e.preventDefault();
    const newPost = {
      user: user._id,
      description: desc.current.value
    };

    // if there is an image with post
    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      newPost.image = fileName;
      console.log("NEW POST", newPost);
      try {
        dispatch(imageUploadAction(data));
      } catch (err) {
        console.log(err);
      }
    }

    dispatch(postUploadAction(newPost));
    resetShare();
  };

  const resetShare = () => {
    setImage(null);
    desc.current.value = "";
  };

  return (
    <div className="sharePost">
      <img src={Luxury} alt="" />
      <div className="text-input">
        <input
          type="text"
          placeholder="#What is on your MIND ?"
          required
          ref={desc}
        />

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
            <UilPlayCircle style={{ color: "#d4380d", cursor: "pointer" }} />
          </div>
          <div className="option">
            <div className="option-label">Location</div>
            <UilLocationPoint style={{ color: "#5b8c00", cursor: "pointer" }} />
          </div>
          <div className="option">
            <div className="option-label">Schedule</div>
            <UilSchedule style={{ color: "#ad6800", cursor: "pointer" }} />
          </div>

          <div className="option">
            <div className="option-label">Share</div>
            <img
              src={sharePost}
              alt=""
              width="25"
              className="share-icons"
              onClick={handleUpload}
            />
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
            <UilTimes onClick={() => setImage(null)} className="times" />
            <img src={URL.createObjectURL(image)} alt="preview" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SharePost;
