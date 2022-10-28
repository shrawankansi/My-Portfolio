import React from 'react'
import './App.css'
import Header from "./Component/Header"
import Home from "./Component/Hero/Home"
import Portfolio from "./Component/Portfolio/Portfolio"
// import Resume from "./Component/Resume/Resume"
// import Testimonial from "./Component/Testimonial/Testimonial"
import Features from "./Component/Features/Features"
import Blog from "./Component/Blog/Blog"
import Contact from './Component/Contact/Contact'
import Footer from "./Component/Footer"

const App = () => {
  return <>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      {/* <Resume /> */}
      {/* <Testimonial /> */}
      <Blog />
      <Contact />
      <Footer />
  </> 
}

export default App
