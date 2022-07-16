import React from 'react'
import { trendData } from '../../../data/followers'

import "../trending/Trendcard.css"
const Trendcard = () => {
  return (
    <div className='trends'>
        <div className="trending-topics">
            <h3>Trending Topics</h3>
        </div>
      {
        trendData.map( (trend) =>(
           <div className="trend" key={trend.id}>
             <span className='trend-name'> # {trend.name} </span>
             <span> {trend.shares}k Shares </span>
           </div>
        ))
      }
    </div>
  )
}

export default Trendcard
