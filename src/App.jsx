import React from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import Techstack from "./components/Techstack"
import MyProject from "./components/MyProject"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import global from "../src/style/global.css"


function App() {
   return (
   <>
      <Header/>
      <Hero/>
      <AboutMe/>
      <Techstack/>
      <MyProject/>
      <Contact/>
      <Footer/>
   </>
   )
}

export default App
