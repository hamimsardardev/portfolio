import React from 'react'
import Navber from './components/navber'
import Banner from './components/banner'
import ProfessionalPart from './components/professionalPart'
import WorkPart from './components/workPart'
import Portfolio from './components/portfolio'
import ProjectIdea from './components/projectIdea'
import Blog from './components/blog'
import DoPart from './components/doPart'
import ClientsPart from './components/clientsPart'
import MySkill from './components/mySkill'
import Testmonial from './components/testmonial'
import Contact_Part from './components/contact_Part'
import Footer from './components/footer'

const Home = () => {
  return (
    <>
    <Navber/>
    <Banner/>
    <MySkill/>
    <ProfessionalPart/>
    <WorkPart/>
    <Portfolio/>
    <ProjectIdea/>
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
