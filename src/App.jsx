import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Education from './components/Education'
import Skills from './components/Skills'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Projects />
        <Education />
        <Skills />
      </main>
      <Footer />
    </>
  )
}

export default App
