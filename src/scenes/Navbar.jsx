import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-800 p-4 fixed w-full top-0 z-10 flex justify-between items-center">
    <div className="flex items-center space-x-4">
      <div className="text-white text-xl font-bold">
        MyName
      </div>
    </div>
    <ul className="flex space-x-8 list-none m-0 p-0">
      <li><a href="#background" className="text-white no-underline hover:underline">Background</a></li>
      <li><a href="#skills" className="text-white no-underline hover:underline">Skills</a></li>
      <li><a href="#projects" className="text-white no-underline hover:underline">Projects</a></li>
      <li><a href="#contact" className="text-white no-underline hover:underline">Contact</a></li>
      <li><a href="/path/to/resume.pdf" className="text-white no-underline hover:underline" download>Resume</a></li>
    </ul>
  </nav>
);

export default Navbar;
