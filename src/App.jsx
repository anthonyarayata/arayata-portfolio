import Navbar from './scenes/Navbar';
import Background from './scenes/Background';
import Skills from './scenes/Skills';
import Projects from './scenes/Projects';
import Contact from './scenes/Contact';

const App = () => (
  <div className="min-h-screen flex items-center">
    <Navbar />
    <div className="min-h-screen flex flex-col items-center w-full">
      <section id="background" className="min-h-screen flex flex-col items-center justify-center">
        <Background />
      </section>
      <section id="skills" className="min-h-screen flex flex-col items-center justify-center">
        <Skills />
      </section>
      <section id="projects" className="min-h-screen flex flex-col items-center justify-center">
        <Projects />
      </section>
      <section id="contact" className="min-h-screen flex flex-col items-center justify-center">
        <Contact />
      </section>
    </div>
  </div>
);

export default App;
