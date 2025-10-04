
import React from 'react';
import { Link } from 'react-router-dom';
import TwitterIcon from './icons/TwitterIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import FacebookIcon from './icons/FacebookIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          <div className="pb-6">
            <Link to="/contact" className="text-sm leading-6 text-gray-300 hover:text-white">
              Contact Us
            </Link>
          </div>
          <div className="pb-6">
            <Link to="/privacy" className="text-sm leading-6 text-gray-300 hover:text-white">
              Privacy Policy
            </Link>
          </div>
          <div className="pb-6">
            <Link to="/terms" className="text-sm leading-6 text-gray-300 hover:text-white">
              Terms of Service
            </Link>
          </div>
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          <a href="#" className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">Facebook</span>
            <FacebookIcon />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">Twitter</span>
            <TwitterIcon />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">LinkedIn</span>
            <LinkedInIcon />
          </a>
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-400">
          &copy; {new Date().getFullYear()} BizMitra. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;