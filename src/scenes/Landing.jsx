import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import { FaArrowRight, FaArrowLeft, FaArrowDown, FaArrowUp } from 'react-icons/fa'; 
import profilePhoto from "../assets/images/Profile-Image.png";
import Background from './Background';

const Landing = () => {
  const [showBackground, setShowBackground] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleArrowClick = () => {
    setShowBackground(!showBackground); // Toggle the state
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col md:flex-row overflow-hidden">
      <div className={`transition-all duration-500 ease-in-out ${showBackground ? (isSmallScreen ? 'h-1/2' : 'w-1/2') : 'w-full h-full'} flex-shrink-0`}>
        <div className="flex flex-col items-center justify-center h-screen bg-bgcolor text-textPrimary relative">
          <div className="mt-8">
            <img src={profilePhoto} className="w-32 md:w-64 lg:w-80 rounded-full" alt="Profile" />
          </div>
          <div className="text-center mt-8 lg:mt-16">
            <p className="text-sm md:text-md lg:text-lg mb-2">Hello! I am</p>
            <h1 className="text-lg md:text-2xl lg:text-4xl font-bold font-mono text-mediumBlue">
              <ReactTyped 
                strings={[
                  'Anthony Ross Arayata.',
                  'a web developer.'
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />  
            </h1>
            <p className="sm:text-xs text-sm max-w-lg justify-center">I am a web developer looking to build and develop websites in a professional environment.</p>
          </div>
        </div>
      </div>
      <div className={`transition-all duration-500 ease-in-out ${showBackground ? (isSmallScreen ? 'h-1/2' : 'w-1/2') : 'w-0 h-0 md:w-0 md:h-full'} flex-shrink-0 relative`}>
        <div className={`${showBackground ? 'opacity-100' : 'opacity-0'} transition-opacity duration-2500 ease-in-out`}>
          <Background />
        </div>
      </div>
      <div className="absolute right-4 bottom-0  md:top-1/2">
        <p onClick={handleArrowClick} className="text-xl md:text-2xl lg:text-3xl border-none bg-none cursor-pointer">
          {showBackground ? (isSmallScreen ? <FaArrowUp /> : <FaArrowRight />) : (isSmallScreen ? <FaArrowDown /> : <FaArrowLeft />)} 
        </p>
      </div>
    </div>
  );
};

export default Landing;