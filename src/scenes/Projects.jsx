import React from 'react';

const projects = [
  {
    title: 'SocialScreen',
    thumbnail: 'path/to/project1-thumbnail.jpg',
    gif: 'path/to/project1.gif',
    description: 'A Chrome web extension that filters out content by hiding the containers of the target content. It uses fuse.js to filter out similar or misspelled version of the words to be filtered out. It works like the old adblock extensions in terms of removing content.',
    technologies: 'JavaScript, Node.js, Fuse.js, Webpack'
  },
];

const Projects = () => {
  return (
  <div className='flex w-screen h-screen items-center justify-center'>
    <section id="projects" className="p-4">
      <h1 className="text-center text-2xl lg:text-4xl font-bold mb-4">Projects</h1>
      <p className="text-center items-center justify-center">These are the personal projects that I have developed in my free time.</p>
      <div className="flex flex-wrap justify-center gap-8 mt-4">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white overflow-hidden w-1/2 items-center"
          >
            <div className="flex flex-col md:flex-row">
              <div className="relative">
                <img src={project.thumbnail} alt={project.title} className="w-full md:w-64 h-auto transition-opacity duration-300 ease-in-out" />
                <img src={project.gif} alt={project.title} className="w-full md:w-64 h-auto absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out" />
              </div>
              <div className="p-4 flex flex-col justify-between w-full">
                <div>
                  <h2 className="text-xl text-darkBlue font-bold mb-2">{project.title}</h2>
                  <p className="text-darkBlue">{project.description}</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gray-200 text-center">
              <p className="text-darkBlue">{project.technologies}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
  );
};

export default Projects;
