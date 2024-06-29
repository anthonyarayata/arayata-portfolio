import React from 'react';
import scuffedGif from '../assets/videos/scuffed-gif.gif';
import ssLogo from '../assets/images/SS-Logo.png';
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: 'SocialScreen',
    thumbnail: ssLogo,
    gif: scuffedGif,
    description: 'A Chrome web extension that filters out unwanted content by hiding the containers of targeted elements. It utilizes the Fuse.js library for fuzzy logic to identify and filter out variations and misspellings of specified words. JavaScript is used to manipulate the DOM and hide the identified containers.',
    technologies: 'JavaScript, Node.js, Fuse.js, Webpack',
    github: 'https://github.com/your-repo-url',
  },
];

const Projects = () => {
  return (
    <div className='flex w-screen h-screen items-center justify-center'>
      <section id="projects" className="p-4">
        <h1 className="text-center text-2xl lg:text-4xl font-bold mb-4">Projects</h1>
        <div className="flex flex-wrap justify-center gap-8 mt-4">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white overflow-hidden w-full md:w-1/2 items-center shadow-lg rounded-lg"
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative">
                  <img src={project.thumbnail} alt={project.title} className="w-full md:w-128 h-auto transition-opacity duration-300 ease-in-out" />
                  <img src={project.gif} alt={project.title} className="w-full md:w-128 h-auto absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out" />
                </div>
                <div className="p-4 flex flex-col justify-between w-full">
                  <div>
                    <h2 className="text-xl text-darkBlue font-bold mb-2">{project.title}</h2>
                    <p className="text-darkBlue">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-gray-200 flex justify-center items-center relative">
                <p className="text-mediumBlue text-center">{project.technologies}</p>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-darkBlue hover:text-mediumBlue absolute right-4">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
