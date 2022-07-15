import React from "react";
import LogoImage from "../../../../img/logo.png"
import SocialImageThree from "../../../../img/social-image003.png"
import {UilSearch} from "@iconscout/react-unicons"


import "../logoSearch/LogoSearch.css"
const LogoSearch = () => {
  return (
    <div className="logo-search">
    <img src={SocialImageThree} alt="" width="50" />
    <div className="search">
        <input type="text" placeholder="#Search" />  
        <div className="search-icon">
            <UilSearch/>
        </div>
    </div>
    </div>
  );
};

export default LogoSearch;
