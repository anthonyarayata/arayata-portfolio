import React from 'react';

const Background = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen w-4/5 bg-white text-darkBlue">
      <h1 className="text-sm md:text-xl lg:text-2xl font-bold">About Me</h1>
      <p className="mt-4 text-xs md:text-lg lg:text-xl">I have a B.Sc. in Computer Science. I like building websites and web applications. JavaScript is my go-to language for most projects because of its versatility and efficiency plus I used it a lot when I was an undergrad.</p>
      <p className="mt-4 text-xs md:text-lg lg:text-xl">Lately, I've been working on JavaScript frameworks and libraries like React.js, as well as backend technologies like Node.js and Express</p>
    </section>
  );
};

export default Background;
