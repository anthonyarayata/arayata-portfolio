import React, { useEffect, useState } from 'react';
import Navbar from './scenes/Navbar';
import Background from './scenes/Background';
import Contact from './scenes/Contact';
import Projects from './scenes/Projects';
import Skills from './scenes/Skills';
import './index.css';  

const App = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col">
      <Navbar />
      <section id="background" className="flex-grow">
        <Background />
      </section>
      <section id="skills" className="flex-grow">
        <Skills />
      </section>
      <section id="projects" className="flex-grow">
        <Projects />
      </section>
      <section id="contact" className="flex-grow">
        <Contact />
      </section>
    </div>
  );
};

export default App;
