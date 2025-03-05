import React from 'react'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import Partners from './Partners'
import Services from './Services'
import Portfolio from './Portfolio'
import MarqueeSlider from './MarqueeSlider'
import Lighthouse from './Lighthouse'
import Brand from './Brand'
import PressRelease from './PressRelease'
import BookConsultation from './BookConsultation'

const Home = () => {
  return (
    <div className='mt-3'>
      <HeroSection />
      <AboutSection />
      <Partners />
      <Services/>
      <MarqueeSlider />
      <Lighthouse />
      <Portfolio />
      <Brand />
      <PressRelease />
      <BookConsultation />
    </div>
  )
}

export default Home