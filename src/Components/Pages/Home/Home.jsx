import React from 'react'

import Hero from './Hero'
import HomeAbout from './HomeAbout'
import HomeFaq from './HomeFaq'
import HomeTestimonial from './HomeTestimonial'
import BenefitsSection from './BenefitsSection'

const Home = () => {
  return (
    <div>
      <Hero />
      <BenefitsSection/>
      <HomeAbout />
      <HomeTestimonial />
      <HomeFaq />
    </div>
  )
}

export default Home
