

import React from 'react'
import SocialImageTwo from "../../../../img/social-image002.png"
import SocialImageThree from "../../../../img/social-image003.png"
import LuxuryHome from "../../../../img/Luxury-Home.png"

import "../profileCard/ProfileCard.css"

const ProfileCard = () => {
  return (
    <div className='profile-card'>
       <div className="profile-images">
      <img src={SocialImageTwo} alt="" />
      <img src={LuxuryHome} alt="" />
      </div>
    </div>
  )
}

export default ProfileCard
