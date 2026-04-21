import React from 'react'
import HomeBanner from './HomeBanner/HomeBanner'
import HomeDetails from './HomeDetails/HomeDetails' 

function HomeScreen() {
  return (
    <div className="w-full min-h-screen bg-[#eaeded]">
      <HomeBanner />
      <HomeDetails />
    </div>
  )
}

export default HomeScreen