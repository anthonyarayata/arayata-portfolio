import React, { useState, useEffect } from "react";
import { FaCode, FaServer, FaBrush, FaFigma, FaReact, FaNodeJs, FaHtml5, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io"; 
import Collapse from '@mui/material/Collapse';

const skills = [
  { 
    icon: <FaCode />, 
    title: 'Front-end', 
    subIcons: [< IoLogoJavascript key="javascript" />, <FaReact key="react" />, <FaHtml5 key="html5" />, <FaCss3 key="css3" />], 
    description: 'JavaScript, React.js, HTML, CSS' 
  },
  { 
    icon: <FaServer />, 
    title: 'Back-end', 
    subIcons: [<FaNodeJs key="nodejs" />], 
    description: 'Node.js, Express' 
  },
  { 
    icon: <FaBrush />, 
    title: 'Web design', 
    subIcons: [< FaFigma />], 
    description: 'Figma' 
  },
];

const Skills = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseEnter = (index) => {
    if (!isSmallScreen) {
      setExpandedIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isSmallScreen) {
      setExpandedIndex(null);
    }
  };

  return (
    <section id="skills" className="w-screen min-h-screen p-16 flex items-center justify-center overflow-hidden">
      <div className="text-center w-full">
        <h1 className="text-xl md:text-2xl font-bold mb-8">Skills</h1>
        <div className="flex flex-wrap justify-center gap-8 md:gap-48">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className={`bg-white shadow-md rounded p-6 transition-all duration-400 ease-in-out ${expandedIndex === index ? 'w-64 md:w-72' : 'w-56 md:w-64'} flex flex-col items-center text-center justify-center`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="mb-6 text-4xl md:text-6xl text-darkBlue">{skill.icon}</div>
              <h2 className="font-bold text-lg mb-4">{skill.title}</h2>
              <div className="flex text-xl md:text-2xl text-darkBlue justify-center space-x-2 mb-4">
                {skill.subIcons.map((subIcon) => subIcon)}
              </div>
              <Collapse in={expandedIndex === index}>
                <p className="mt-2 md:mt-4">{skill.description}</p>
              </Collapse>
              <p className="md:hidden mt-2 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
