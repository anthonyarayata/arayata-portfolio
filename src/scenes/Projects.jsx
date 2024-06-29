import React, { useState } from 'react';
import scuffedGif from '../assets/videos/scuffed-gif.gif';
import ssLogo from '../assets/images/SS-Logo.png';
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: 'SocialScreen',
    thumbnail: ssLogo,
    gif: scuffedGif,
    description: 'A Chrome web extension that filters out unwanted content by hiding the containers of targeted elements. It utilizes the Fuse.js library for fuzzy logic to identify and filter out variations and misspellings of specified words. JavaScript is used to manipulate the DOM and hide the identified containers.',
    technologies: 'JavaScript, Node.js, Fuse.js, HTML, CSS, Webpack',
    github: 'https://github.com/anthonyarayata/socialscreen',
  },
];

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentGif, setCurrentGif] = useState(null);

  const handleThumbnailClick = (gif) => {
    setCurrentGif(gif);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentGif(null);
  };

  return (
    <div className='flex w-screen h-screen items-center justify-center'>
      <section id="projects" className="p-4">
        <h1 className="text-center text-xl md:text-4xl font-bold mb-4">Projects</h1>
        <div className="flex flex-wrap justify-center gap-8 mt-4">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white overflow-hidden w-full md:w-1/2 items-center shadow-lg rounded-lg"
            >
              <div className="flex flex-col md:flex-row">
                <div className="flex justify-center md:relative">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title} 
                    className="w-64 md:w-128 h-auto shadow-lg m-8 transition-opacity duration-300 ease-in-out cursor-pointer" 
                    onClick={() => handleThumbnailClick(project.gif)}
                  />
                  <img src={project.gif} alt={project.title} className="w-64 md:w-128 h-auto absolute top-0 m-8 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out" />
                </div>
                <div className="p-4 flex flex-col justify-between w-full">
                  <div>
                    <h2 className="text-lg md:text-xl text-darkBlue font-bold mb-2">{project.title}</h2>
                    <p className="text-darkBlue text-sm md:text-lg">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-gray-200 flex justify-center items-center relative">
                <p className="text-gray text-center text-xs md:text-md pb-4">{project.technologies}</p>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-darkBlue hover:text-mediumBlue absolute right-2 bottom-2 md:right-4 md:bottom-4">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative bg-white p-2 rounded-lg">
            <button className="absolute py-1 px-4 top-2 right-2 text-xl text-darkBlue opacity-75" onClick={closeModal}>
              &times;
            </button>
            <img src={currentGif} alt="Project GIF" className="w-full h-auto" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
