import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export function Footer() {
  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  };

  return (
    <footer className="bg-red-800 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">Contact North Pole</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>santa@northpole.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>1-SANTA-CLAUS</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>North Pole, Arctic Circle</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><HashLink smooth to="/#about" scroll={scrollWithOffset} className="hover:text-red-200">About Us</HashLink></li>
              <li><HashLink smooth to="/#faq" scroll={scrollWithOffset} className="hover:text-red-200">FAQs</HashLink></li>
              <li><Link to="/privacy" className="hover:text-red-200">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-red-200">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="mt-4 space-y-2">
              <li><HashLink smooth to="/#order" scroll={scrollWithOffset} className="hover:text-red-200">Personalized Letters</HashLink></li>
              <li><Link to="/nice-list-certificate" className="hover:text-red-200">Nice List Certificate</Link></li>
              <li><HashLink smooth to="/#order" scroll={scrollWithOffset} className="hover:text-red-200">Corporate Orders</HashLink></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="mt-4">Subscribe for holiday updates and special offers!</p>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md border-gray-300 bg-white/10 px-4 py-2 text-white placeholder-gray-300"
              />
              <button className="mt-2 w-full rounded-md bg-white px-4 py-2 text-red-800 hover:bg-red-50">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 border-t border-red-700 pt-8 text-center">
          <p>© {new Date().getFullYear()} Santa's Workshop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}