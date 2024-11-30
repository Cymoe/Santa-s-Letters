import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Logo } from './Logo';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: yCoordinate, behavior: 'smooth' }); 
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'faq', 'order'];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (section: string) => {
    if (location.pathname !== '/') return false;
    return activeSection === section;
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
         
              <span className="ml-2 text-xl font-bold text-red-600">Santa's Letters</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <HashLink 
              smooth 
              to="/#about"
              scroll={scrollWithOffset}
              className={`text-gray-700 hover:text-red-600 ${isActive('about') ? 'text-red-600' : ''}`}
            >
              About Us
            </HashLink>
            <HashLink 
              smooth 
              to="/#faq"
              scroll={scrollWithOffset}
              className={`text-gray-700 hover:text-red-600 ${isActive('faq') ? 'text-red-600' : ''}`}
            >
              FAQ
            </HashLink>
            <HashLink 
              smooth 
              to="/#contact"
              scroll={scrollWithOffset}
              className="text-gray-700 hover:text-red-600"
            >
              Contact
            </HashLink>
            <HashLink 
              smooth 
              to="/#order"
              scroll={scrollWithOffset}
              className={`bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 ${
                isActive('order') ? 'ring-2 ring-red-500 ring-offset-2' : ''
              }`}
            >
              Order Now
            </HashLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-600"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <HashLink
              smooth
              to="/#about"
              scroll={scrollWithOffset}
              className={`block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-red-50 ${
                isActive('about') ? 'bg-red-50 text-red-600' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </HashLink>
            <HashLink
              smooth
              to="/#faq"
              scroll={scrollWithOffset}
              className={`block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-red-50 ${
                isActive('faq') ? 'bg-red-50 text-red-600' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </HashLink>
            <HashLink
              smooth
              to="/#contact"
              scroll={scrollWithOffset}
              className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-red-50"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </HashLink>
            <HashLink 
              smooth
              to="/#order"
              scroll={scrollWithOffset}
              className={`block w-full text-left px-3 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 ${
                isActive('order') ? 'ring-2 ring-red-500 ring-offset-2' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              Order Now
            </HashLink>
          </div>
        </div>
      )}
    </nav>
  );
}