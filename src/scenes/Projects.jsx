const projects = [
  { title: 'Project 1', gif: 'path/to/project1.gif', description: 'Description of project 1' },
  // Add more projects here
];

const Projects = () => (
  <div className="p-4">
    <h1 className="text-center text-2xl lg:text-4xl font-bold mb-4">Projects</h1>
    <div className="flex flex-wrap justify-center gap-4">
      {projects.map(project => (
        <div key={project.title} className="bg-gray-100 border border-gray-300 rounded p-4 w-48 lg:w-64 text-center shadow hover:shadow-md">
        <h2 className="font-bold">{project.title}</h2>
          <p>{project.description}</p>
          <div className="hover:shadow-lg">
            <img src={project.gif} alt={project.title} className="hidden hover:block" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
