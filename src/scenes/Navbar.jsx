import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogleDrive, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white h-12 fixed shadow opacity-80 w-full top-0 z-10 flex justify-between items-center">
      <div className="flex items-center">
        <div className="text-darkBlue sm:text-sm md:text-md lg:text-xl font-bold">
          Tony
        </div>
      </div>
      <div className="md:hidden" onClick={toggleMenu}>
        {isOpen ? <FaTimes className="text-darkBlue" /> : <FaBars className="text-darkBlue" />}
      </div>
      <ul className={`flex-col md:flex md:flex-row md:space-x-12 list-none m-0 p-0 items-center ${isOpen ? 'flex' : 'hidden'}`}>
        <li><a href="#background" className="text-darkBlue no-underline hover:text-mediumBlue">Background</a></li>
        <li><a href="#skills" className="text-darkBlue no-underline hover:text-mediumBlue">Skills</a></li>
        <li><a href="#projects" className="text-darkBlue no-underline hover:text-mediumtBlue">Projects</a></li>
        <li><a href="#contact" className="text-darkBlue no-underline hover:text-mediumBlue">Contact</a></li>
        <li>
          <a
            href="https://drive.google.com/uc?export=download&id=1Xw6WBcKTnFBVMfCb0nF_86ysaxmwBj-n"
            className="bg-mediumBlue text-white hover:text-lightBlue px-4 py-2 rounded-full flex items-center justify-center transition duration-300 ease-in-out"
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
