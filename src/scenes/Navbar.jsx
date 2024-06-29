import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogleDrive, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`bg-white fixed shadow opacity-95 md:opacity-80 w-screen top-0 z-10 grid grid-cols-8 items-center px-4 transition-height duration-300 ${isOpen ? 'h-auto' : 'h-16'}`}>
      <div className="col-span-1 flex items-center">
        <div className="text-darkBlue text-sm md:text-md lg:text-xl font-bold">
          Tony
        </div>
      </div>
      <div className="col-span-6 flex justify-center">
        <ul className={`flex-col md:flex md:flex-row md:space-x-12 list-none m-0 p-4 items-center mx-auto text-sm md:text-md ${isOpen ? 'flex' : 'hidden md:flex'}`}>
          <li><a href="#background" className="text-darkBlue no-underline hover:text-mediumBlue">Background</a></li>
          <li><a href="#skills" className="text-darkBlue no-underline hover:text-mediumBlue">Skills</a></li>
          <li><a href="#projects" className="text-darkBlue no-underline hover:text-mediumBlue">Projects</a></li>
          <li><a href="#contact" className="text-darkBlue no-underline hover:text-mediumBlue">Contact</a></li>
          <li className="md:hidden mt-2">
            <a
              href="https://drive.google.com/uc?export=download&id=1Xw6WBcKTnFBVMfCb0nF_86ysaxmwBj-n"
              className="bg-lightBlue text-darkBlue hover:text-mediumBlue text-xs px-8 py-1 rounded-full items-center justify-center transition duration-300 ease-in-out flex"
              download
            >
              <FaGoogleDrive className="mr-2" />
              My Resume
            </a>
          </li>
        </ul>
      </div>
      <div className="col-span-1 flex items-center justify-end pr-1">
        <a
          href="https://drive.google.com/uc?export=download&id=1Xw6WBcKTnFBVMfCb0nF_86ysaxmwBj-n"
          className="bg-lightBlue text-darkBlue hover:text-mediumBlue text-sm px-8 py-1 rounded-full items-center justify-center transition duration-300 ease-in-out hidden md:flex"
          download
        >
          <FaGoogleDrive className="mr-2" />
          My Resume
        </a>
        <div className="md:hidden ml-4" onClick={toggleMenu}>
          {isOpen ? <FaTimes className="text-darkBlue" /> : <FaBars className="text-darkBlue" />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
