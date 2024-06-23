import React from "react"; 
import { ReactTyped } from "react-typed";
import profilePhoto from "../assets/Profile-Image.png";

const Background = () => (
  <div className="text-center flex item-center flex-row lg:flex-row lg:items-center lg:justify-center lg:space-x-4 p-6 lg:p-8 bg-background text-textPrimary">
    <div className="text-center lg:text-left">
      <p className="text-sm">Hello! I am</p>
      <h1 className="text-2xl lg:text-4xl font-bold">
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
      <p className="text-lg lg:text-2xl">I hold a Bachelor of Science degree in Computer Science.</p>
      <p className="text-xd">I am an aspiring web developer looking to build and develop websites in a professional environment.</p>
    </div>
    <div className="mt-4 lg:mt-0">
        <img src={profilePhoto} className="w-32 lg:w-48" />
    </div>
  </div>
);

export default Background;
