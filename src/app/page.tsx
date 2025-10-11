import React from 'react'
import Navber from './components/navber'
import Banner from './components/banner'
import Portfolio from './components/portfolio'
import ProjectIdea from './components/projectIdea'
import Blog from './components/blog'
import DoPart from './components/doPart'
import ClientsPart from './components/clientsPart'
import MySkill from './components/mySkill'
import Testmonial from './components/testmonial'
import Contact_Part from './components/contact_Part'
import Footer from './components/footer'
import Services from './components/services'
import AboutPart from './components/aboutPart'

const Home = () => {
  return (
    <>
    <Navber/>
    <Banner/>
    <AboutPart/>
    <Services/>
    <MySkill/>
    <Portfolio/>
    {/* <ProjectIdea/> */}
    <Blog/>
    <DoPart/>
    <ClientsPart/>
    <Testmonial/>
    <Contact_Part/>
    <Footer/>
    </>
  )
}

export default Home
