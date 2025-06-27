import Banner from '@components/common/banner'
import React from 'react'
import Introduction from './components/introduction'


const About = () => {
  return (
    <>
      <Banner title={'About Us'} 
        breadcrumbs={[{ title: "About Us", href: "/about-us" }]}
       />
       <Introduction />
    </>
  )
}

export default About