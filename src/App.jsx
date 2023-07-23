import { useState } from "react"
import React from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import Techstack from "./components/Techstack"
import MyProject from "./components/MyProject"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import global from "../src/style/global.css"
import { Context } from "./context/headerContext"


function App() {

   const [isHeroVisible, setIsHeroVisible] = useState(true)

   return (
   <>
      <Context.Provider value={{setIsHeroVisible, isHeroVisible}}>
         <Header/>
         <Hero/>
         <AboutMe/>
         <Techstack/>
         <MyProject/>
         <Contact/>
         <Footer/>
      </Context.Provider>
   </>
   )
}

export default App
