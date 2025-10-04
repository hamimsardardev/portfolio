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

const Home = () => {
  return (
    <>
    <Navber/>
    <Banner/>
    <ProfessionalPart/>
    <WorkPart/>
    <Portfolio/>
    <ProjectIdea/>
    <Blog/>
    <DoPart/>
    <ClientsPart/>
    </>
  )
}

export default Home
