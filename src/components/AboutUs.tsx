import React from 'react';
import { AboutHero } from './about/AboutHero';
import { ValuesSection } from './about/ValuesSection';

interface AboutUsProps {
  id?: string;
}

export function AboutUs({ id }: AboutUsProps) {
  return (
    <section id={id} className="w-full">
      <AboutHero />
      <div className="container mx-auto px-4">
        <ValuesSection />
      </div>
    </section>
  );
}