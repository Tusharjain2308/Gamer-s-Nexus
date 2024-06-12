import React from 'react'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import NewHero from './Components/NewHero/NewHero'
import SecondaryHero from './Components/Secondary Hero/SecondaryHero'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      
      <NewHero/>
      <SecondaryHero/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default App
