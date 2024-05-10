import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
//import Projects from '../components/Projects'
import Contact from '../components/Contact'
//import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'
import TestSwiper from "../components/TestSwiper"


export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <TestSwiper/>
      <Services />
      {/* <Projects/> */}
      {/* <Testimonial/> */}
      <Contact />
      <Footer/>
    </div>
  )
}
