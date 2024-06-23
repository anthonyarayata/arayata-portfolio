import React, { useState } from "react";
import { FaCode, FaServer, FaFigma } from "react-icons/fa";
import Collapse from '@mui/material/Collapse';

const skills = [
  { icon: <FaCode />, title: 'Front-end', description: 'React.js, JavaScript, HTML, CSS' },
  { icon: <FaServer />, title: 'Back-end', description: 'Node.js, Express' },
  { icon: <FaFigma />, title: 'Web design', description: 'Figma' },
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
    <div className="p-4">
      <h1 className="text-center text-2xl lg:text-4xl font-bold mb-4">Skills</h1>
      <div className="flex flex-wrap justify-center gap-24 lg:gap-32">
        {skills.map((skill, index) => (
          <div 
            key={skill.title} 
            className={`bg-gray-100 border border-gray-300 rounded p-4 transition-all duration-400 ease-in-out ${expandedIndex === index ? 'w-64' : 'w-48'} flex flex-col items-center text-center justify-center`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <h1 className="mb-4">{skill.icon}</h1>
            <h2 className="font-bold">{skill.title}</h2>
            <Collapse in={expandedIndex === index}>
              <p>{skill.description}</p>
            </Collapse>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
