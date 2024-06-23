import { FaCode, FaServer, FaFigma } from "react-icons/fa"

const skills = [
  { icon: <FaCode />, title: 'Front-end', description: 'React.js, JavaScript, HTML, CSS' },
  { icon: <FaServer />, title: 'Back-end', description: 'Node.js, Express'},
  { icon: <FaFigma />, title: 'Web design', description: 'Figma'},
];

const Skills = () => (
  <div className="p-4">
    <h1 className="text-center text-2xl lg:text-4xl font-bold mb-4">Skills</h1>
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map(skill => (
        <div key={skill.title} className="bg-gray-100 border border-gray-300 rounded p-4 w-48 lg:w-64 flex flex-col items-center text-center justify-center">
          <h1>{skill.icon}</h1>
          <h2 className="font-bold">{skill.title}</h2>
          <p>{skill.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
