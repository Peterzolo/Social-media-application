import React from 'react'

import "../home/Home.css"
import ProfileIndex from '../profile/ProfileIndex'

const Home = () => {
  return (

        <div className="home">
            <div className="profile-home"> <ProfileIndex/> </div>
            <div className="post-homne">Post</div>
            <div className="riht-home">Right bar</div>
        </div>

  )
}

export default Home
