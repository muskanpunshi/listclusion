import Banner from '@components/common/banner'
import React from 'react'
import Introduction from './components/introduction'
import HowItWorksSection from './components/howItWorksSection'
import TeamSection from './components/teamSection'



const About = () => {
  return (
    <>
      <Banner title={'About Us'}
    
        breadcrumbs={[{ title: "About Us", href: "/about-us" }]}
       />
       <Introduction />
       <HowItWorksSection/>
       <TeamSection/>
    </>
  )
}

export default About