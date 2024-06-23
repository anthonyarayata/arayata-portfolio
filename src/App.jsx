import Navbar from './scenes/Navbar';
import Background from './scenes/Background';
import Skills from './scenes/Skills';
import Projects from './scenes/Projects';
import Contact from './scenes/Contact';

const App = () => (
  <div className="min-h-screen w-screen flex flex-col">
    <div className="">
      <Navbar />
    </div>
    <div className="flex flex-col items-center justify-center w-screen gap-y-48">
      <section id="background" className="flex flex-col items-center justify-center w-screen">
        <Background />
      </section>
      <section id="skills" className="flex flex-col items-center justify-center w-screen">
        <Skills />
      </section>
      <section id="projects" className="flex flex-col items-center justify-center w-screen">
        <Projects />
      </section>
      <section id="contact" className="flex flex-col items-center justify-center w-screen">
        <Contact />
      </section>
    </div>
  </div>
);

export default App;
