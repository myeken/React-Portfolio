import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import logo from "../assets/projects/namelogo.png"


export const Navbar = () => {
  return (
    <nav className="w-full py-6 mb-20 flex items-center justify-between">
      <div className="flex items-center text-white ml-4 mx-2">
        <img className="mx-1 w-64" src={logo} alt='logo'></img>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
      <a href='https://www.linkedin.com/in/michael-nguyen-191338255/'>
        <FaLinkedin  className='text-4xl'/>
        </a>
        <a href='https://github.com/myeken'>
        <FaGithub className='text-4xl'/>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
