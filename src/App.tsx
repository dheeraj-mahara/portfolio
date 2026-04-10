import About from "./pages/About"
import AIChat from "./pages/AIChat"
import Contact from "./pages/Contact"
import Footer from "./pages/Footer"
import FooterNav from "./pages/FooterNav"
import Home from "./pages/Home"
import Nav from "./pages/Nav"
import Projects from "./pages/Projects"
import Skill from "./pages/Skill"

function App() {

  return (
    <div>
      <Nav />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skill />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <FooterNav />
      <Footer/>
      <AIChat />
    </div>

  )
}

export default App
