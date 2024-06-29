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
    <div className="overflow-x-hidden">
      <Navbar />
      <section id="background" >
        <Background />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
