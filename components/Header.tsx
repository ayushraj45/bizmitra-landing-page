
import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import MenuIcon from './icons/MenuIcon';
import XIcon from './icons/XIcon';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const navLinkClasses = ({ isActive }: { isActive: boolean }): string =>
    `text-[20px] font-semibold leading-6 transition-colors duration-200 ${
      isActive ? 'text-brand-highlight' : 'text-gray-700 hover:text-brand-dark'
    }`;
  
  const scrollLinkClasses = `text-[20px] font-semibold leading-6 text-gray-700 hover:text-brand-dark transition-colors duration-200`;

  const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }): string =>
    `-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors duration-200 ${
      isActive ? 'bg-gray-100 text-brand-highlight' : 'text-gray-800 hover:bg-gray-200 hover:text-brand-dark'
    }`;
  
  const mobileScrollLinkClasses = `-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-800 hover:bg-gray-200 hover:text-brand-dark`;

  return (
    <header className="bg-brand-light/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="text-4xl font-bold  text-brand-dark">
              Biz<span className="text-brand-highlight">Mitra</span><span className="text-brand-dark text-[25px]">ai</span>
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setIsMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <NavLink to="/" className={navLinkClasses}>
            Home
          </NavLink>
          <a href="#/#benefits" className={scrollLinkClasses}>
            Features
          </a>
          <NavLink to="/pricing" className={navLinkClasses}>
            Pricing
          </NavLink>
          <NavLink to="/contact" className={navLinkClasses}>
            Contact Us
          </NavLink>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/pricing"
            className="rounded-md bg-brand-highlight px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-200"
          >
            Get Started
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50 bg-black/30" onClick={() => setIsMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-brand-light px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5" onClick={() => setIsMenuOpen(false)}>
                <span className="text-2xl font-bold tracking-tight text-brand-dark">BizMitra<span className="text-brand-highlight">.</span></span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XIcon />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <NavLink to="/" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>
                    Home
                  </NavLink>
                  <a href="/#benefits" className={mobileScrollLinkClasses} onClick={() => setIsMenuOpen(false)}>
                    Features
                  </a>
                  <NavLink to="/pricing" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>
                    Pricing
                  </NavLink>
                  <NavLink to="/contact" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>
                    Contact Us
                  </NavLink>
                </div>
                <div className="py-6">
                  <Link
                    to="/pricing"
                    onClick={() => setIsMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-brand-dark hover:bg-gray-200"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
