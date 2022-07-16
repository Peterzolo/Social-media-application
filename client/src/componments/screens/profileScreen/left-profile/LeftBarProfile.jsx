

import React from 'react'
import InfoCard from '../../../pages/info-card/InfoCard'
import LogoSearch from '../../../pages/profile/logoSearch/LogoSearch'
import Followers from "../../../pages/profile/followers/Followers"
import "../left-profile/LeftBarProfile.css"

const LeftBarProfile = () => {
  return (
    <div>
    <LogoSearch/>
    <InfoCard/>
    <Followers/>
    
    
    </div>
  )
}

export default LeftBarProfile
