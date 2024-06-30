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
  const [hoveredThumbnail, setHoveredThumbnail] = useState(null);

  const handleThumbnailClick = (gif) => {
    if (window.innerWidth <= 768) {
      setCurrentGif(gif);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentGif(null);
  };

  return (
    <div className='flex w-screen h-screen'>
      <section id="projects" className="w-full">
        <h1 className="text-center text-xl md:text-4xl font-bold mb-4">Projects</h1>
        <div className="flex flex-wrap justify-center gap-8 mt-4">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white overflow-hidden w-full md:w-1/2 items-center shadow-lg rounded-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-10 relative px-8 gap-16">
                <div className="col-span-1 md:col-span-4 flex justify-center relative">
                  <div 
                    className="relative w-64 md:w-80 m-4 md:m-8"
                    onClick={() => handleThumbnailClick(project.gif)}
                    onMouseEnter={() => setHoveredThumbnail(index)}
                    onMouseLeave={() => setHoveredThumbnail(null)}
                  >
                    <img 
                      src={project.thumbnail} 
                      alt={project.title} 
                      className="w-full h-auto shadow-lg transition-opacity duration-500 ease-in-out"
                    />
                    <img 
                      src={project.gif} 
                      alt={project.title} 
                      className="w-full h-auto absolute top-0 left-0 transition-opacity duration-500 ease-in-out"
                      style={{ opacity: hoveredThumbnail === index ? 1 : 0 }}
                    />
                  </div>
                </div>
                <div className="col-span-1 md:col-span-6">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-darkBlue bg-opacity-75">
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
