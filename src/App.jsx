import Navbar from './scenes/Navbar';
import Background from './scenes/Background';
import Skills from './scenes/Skills';
import Projects from './scenes/Projects';
import Contact from './scenes/Contact';

const App = () => (
  <div className="min-h-screen">
    <Navbar />
    <section id="background" className="min-h-screen flex items-center justify-center">
      <Background />
    </section>
    <section id="skills" className="min-h-screen flex items-center justify-center">
      <Skills />
    </section>
    <section id="projects" className="min-h-screen flex items-center justify-center">
      <Projects />
    </section>
    <section id="contact" className="min-h-screen flex items-center justify-center">
      <Contact />
    </section>
  </div>
);

export default App;
