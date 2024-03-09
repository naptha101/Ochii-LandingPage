import React from 'react'
import Navbar from './Component/Navbar'
import HomePage from './Component/HomePage'
import Marquee from './Component/Marquee'
import About from './Component/About'
import Eyees from './Component/Eyees'
import Project from './Component/Project'
import Cards from './Component/Cards'
import Footer from './Component/Footer'
import LocomotiveScroll from 'locomotive-scroll'

const App = () => {
const scroll=new LocomotiveScroll()
  return (
    <div className='w-full h-screen text-white bg-black'>
<Navbar></Navbar>
 <HomePage></HomePage>
 <Marquee></Marquee>
 <About></About>
 <Eyees></Eyees>
 <Project></Project>
 <Cards></Cards>
 <Footer></Footer>
    </div>
  )
}

export default App