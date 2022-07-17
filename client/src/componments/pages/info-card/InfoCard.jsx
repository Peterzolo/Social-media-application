import React from "react";

import "../info-card/InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";

const InfoCard = () => {
  return (
    <div className="info-card">
      <div className="info-heading">
        <h3>Your info -</h3>
        <UilPen  style ={{color : "#fff"}} />
        <div>MODAL</div>
      </div>
<div className="info">
    <span> <strong>Marital Status</strong> </span>
    <span className="info-desc"> <strong>Married</strong> </span>
</div>
<div className="info">
    <span> <strong>Location</strong> </span>
    <span className="info-desc"> <strong>Lagos</strong> </span>
</div>
<div className="info">
    <span> <strong>Works @</strong> </span>
    <span className="info-desc"> <strong>Deplatform Tech</strong> </span>
</div>
<div className="info">
    <span> <strong>Likes</strong> </span>
    <span className="info-desc"> <strong>Reading | Music | Writing</strong> </span>
</div>

<i class="fa-solid fa-arrow-right-from-bracket"></i>
<button className="button log-out">LogOut</button>


    </div>
  );
};

export default InfoCard;
