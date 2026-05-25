import React from 'react'

import Hero from './Hero'
import HomeAbout from './HomeAbout'
import HomeFaq from './HomeFaq'
import HomeTestimonial from './HomeTestimonial'
import BenefitsSection from './BenefitsSection'
import RentAndHome from './RentAndHome'
import Pricing from '../../Others/Pricing'

import HomeBlog from './HomeBlog'

const Home = () => {
  return (
    <div>
      <Hero />
      <RentAndHome/>
      <BenefitsSection/>
      <HomeAbout />
      <HomeTestimonial />
      <HomeFaq />
      <HomeBlog/>
      <Pricing/>
    </div>
  )
}

export default Home
