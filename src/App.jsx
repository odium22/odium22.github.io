import Background from './components/Background.jsx'
import Cursor from './components/Cursor.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Work from './components/Work.jsx'
import Projects from './components/Projects.jsx'
import Contacts from './components/Contacts.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Background />
      <Cursor />
      <Nav />
      <aside className="side" aria-hidden="true">
        <span className="side-vertical">QA · MANUAL + AUTOMATION · DEV</span>
      </aside>
      <main className="app">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Work />
        <Projects />
        <Contacts />
        <Footer />
      </main>
    </>
  )
}
