import RetroBackdrop from './components/RetroBackdrop'
import PixelCursor from './components/PixelCursor'
import PanelFade from './components/PanelFade'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Education from './components/Education'
import Skills from './components/Skills'
import Footer from './components/Footer'
import SiteBar from './components/SiteBar'
import './App.css'
import './print.css'

function App() {
  return (
    <>
      <RetroBackdrop />
      <PixelCursor />
      <PanelFade />
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Projects />
        <Education />
        <Skills />
      </main>
      <Footer />
      <SiteBar />
    </>
  )
}

export default App
