import Banner from '@components/common/banner'
import React from 'react'
import Introduction from './components/introduction'
import HowItWorksSection from './components/howItWorksSection'
import TeamSection from './components/teamSection'
import Testimonials from '@components/testimonials'
import FeatureSection from './components/featureSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About Us - ListClusion",
};


const About = () => {
  return (
    <>
      <Banner title={'About Us'}
    
        breadcrumbs={[{ title: "About Us", href: "/about-us" }]}
       />
       <Introduction />
       <HowItWorksSection/>
       {/* <Testimonials /> */}
       {/* <FeatureSection /> */}
       <TeamSection/>
    </>
  )
}

export default About