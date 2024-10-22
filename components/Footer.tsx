/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark:bg-darkCard bg-white  dark:text-white text-secondary py-6">
      <div className="container mx-auto px-4">
        <div className=" text-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              &copy; {currentYear} Mahfuj Alam All rights reserved.
            </p>
          </div>
          <nav className="flex space-x-4 justify-center my-3">
            <Link
              href="/about"
              className="text-sm hover:text-gray-300 transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-sm hover:text-gray-300 transition-colors duration-300"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-sm hover:text-gray-300 transition-colors duration-300"
            >
              Contact
            </Link>
          </nav>
          <div className="flex justify-center space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              <FaGithub className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              <FaLinkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              <FaTwitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
