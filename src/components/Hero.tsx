import React from 'react';
import { Logo } from './Logo';

export function Hero() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden bg-red-700 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543589077-47d81606c1bf')] bg-cover bg-center opacity-20" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <Logo />
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Magical Letters from Santa
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-xl">
            Give the gift of wonder with personalized letters from Santa, 
            handwritten with love from the North Pole.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button 
              onClick={() => scrollToSection('order')}
              className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-red-700 hover:bg-red-50 transition"
            >
              Order Now
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="rounded-full border-2 border-white px-8 py-3 text-lg font-semibold text-white hover:bg-white/10 transition"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}