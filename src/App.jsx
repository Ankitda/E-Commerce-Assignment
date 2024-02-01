import { Outlet } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import { createContext, useState } from 'react'

export const IsRendering = createContext({
  setIsHeroRendering : () => {}
});

function App() {

  const [isHeroRendering , setIsHeroRendering] = useState(true);

  return (
    <IsRendering.Provider value={
      {
        setIsHeroRendering
      }
    }>
      <Header />
      {isHeroRendering ? <Hero/> : <Outlet />}
      <Footer />
    </IsRendering.Provider>
  )
}

export default App
