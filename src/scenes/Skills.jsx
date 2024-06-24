import React, { useState } from "react";
import { FaCode, FaServer, FaFigma } from "react-icons/fa";
import Collapse from '@mui/material/Collapse';

const skills = [
  { icon: <FaCode />, title: 'Front-end', description: 'Experience in: JavaScript, React.js, HTML, CSS' },
  { icon: <FaServer />, title: 'Back-end', description: 'Experience in: Node.js, Express' },
  { icon: <FaFigma />, title: 'Web design', description: 'Experience in: Figma' },
];

const Skills = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setExpandedIndex(index);
  };

  const handleMouseLeave = () => {
    setExpandedIndex(null);
  };

  return (
    <section id="skills" className="w-screen h-screen p-4 flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center w-full">
        <h1 className="text-2xl lg:text-4xl font-bold mb-8">Skills</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className={`bg-darkBlue border border-mediumBlue rounded p-6 transition-all duration-400 ease-in-out ${expandedIndex === index ? 'w-72' : 'w-60'} flex flex-col items-center text-center justify-center`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="mb-6 text-4xl">{skill.icon}</div>
              <h2 className="font-bold text-lg mb-4">{skill.title}</h2>
              <Collapse in={expandedIndex === index}>
                <p>{skill.description}</p>
              </Collapse>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
