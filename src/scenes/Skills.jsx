const skills = [
  { title: 'Front-end', description: 'React.js, JavaScript, HTML, CSS' },
  // Add more skills here
];

const Skills = () => (
  <div className="p-4">
    <h1 className="text-center text-2xl lg:text-4xl font-bold mb-4">Skills</h1>
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map(skill => (
        <div key={skill.title} className="bg-gray-100 border border-gray-300 rounded p-4 w-48 lg:w-64 text-center shadow hover:shadow-md">
          <h2 className="font-bold">{skill.title}</h2>
          <p>{skill.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
