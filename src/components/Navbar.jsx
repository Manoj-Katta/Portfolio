import React from "react";
import logo from "../assets/logo.jpg";
import { FaLinkedin, FaGithub, FaInstagram, FaFile } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-16" src={logo} alt="logo"></img>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://drive.google.com/file/d/1gKs0g3nM-TWfnDQxXK0YT2u02VGw7_Ck/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <FaFile />
        </a>
        <a href="https://www.linkedin.com/in/manoj-katta-209a00228/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Manoj-Katta" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/manoj11073/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
