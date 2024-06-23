import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogleDrive, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 z-10 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="text-white text-xl font-bold">
          Tony
        </div>
      </div>
      <div className="md:hidden" onClick={toggleMenu}>
        {isOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
      </div>
      <ul className={`flex-col md:flex md:flex-row md:space-x-8 list-none m-0 p-0 items-center ${isOpen ? 'flex' : 'hidden'}`}>
        <li><a href="#background" className="text-white no-underline hover:underline">Background</a></li>
        <li><a href="#skills" className="text-white no-underline hover:underline">Skills</a></li>
        <li><a href="#projects" className="text-white no-underline hover:underline">Projects</a></li>
        <li><a href="#contact" className="text-white no-underline hover:underline">Contact</a></li>
        <li>
          <a
            href="https://drive.google.com/uc?export=download&id=YOUR_FILE_ID"
            className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center justify-center hover:bg-blue-700 transition duration-300 ease-in-out"
            download
          >
            <FaGoogleDrive className="mr-2" />
            Download Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
