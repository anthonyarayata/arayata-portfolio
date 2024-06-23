import React from "react"; 
import { ReactTyped } from "react-typed";
import profilePhoto from "../assets/Profile-Image.png";

const Background = () => (
  <div className="flex flex-col items-center justify-center min-h-screen w-full bg-background text-textPrimary p-6 lg:p-8">
    <div className="mt-8">
      <img src={profilePhoto} className="w-48 lg:w-64 rounded-full" alt="Profile" />
    </div>
    <div className="text-center mt-8 lg:mt-16">
      <p className="text-lg mb-2">Hello! I am</p>
      <h1 className="text-3xl lg:text-5xl font-bold font-mono">
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
      <p className="text-xl mb-2">I hold a Bachelor of Science degree in Computer Science.</p>
      <p className="text-sm max-w-lg mx-auto">I am an aspiring web developer looking to build and develop websites in a professional environment.</p>
    </div>
  </div>
);

export default Background;
