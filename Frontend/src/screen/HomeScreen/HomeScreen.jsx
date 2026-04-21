import React from 'react'
import HomeBanner from './HomeBanner/HomeBanner'
import HomeDetails from './HomeDetails/HomeDetails'
import HomeRecommendation from './HomeRecommendation/HomeRecommendation'

function HomeScreen() {
  return (
    <div className="w-full min-h-screen bg-[#eaeded]">
      <HomeBanner />
      <HomeDetails />
      <HomeRecommendation />
    </div>
  )
}

export default HomeScreen