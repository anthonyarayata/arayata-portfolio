import React from "react"; 
import { ReactTyped } from "react-typed";
import profilePhoto from "../assets/images/Profile-Image.png";

const Background = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-bgcolor text-textPrimary">
    <div className="mt-8">
      <img src={profilePhoto} className="w-32 md:w-64 lg:w-80 rounded-full" alt="Profile" />
    </div>
    <div className="text-center mt-8 lg:mt-16">
      <p className="sm:text-sm md:text-md lg:text-lg mb-2">Hello! I am</p>
      <h1 className="sm:text-lg md:text-3xl lg:text-5xl font-bold font-mono text-mediumBlue">
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
      <p className="sm:text-xs text-sm max-w-lg mx-auto">I am an aspiring web developer looking to build and develop websites in a professional environment.</p>
    </div>
  </div>
  );
};


export default Background;
