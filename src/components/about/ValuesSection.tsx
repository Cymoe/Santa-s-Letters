import React from 'react';
import { Gift, Heart, Users, Sparkles } from 'lucide-react';
import { ValueCard } from './ValueCard';

const values = [
  {
    icon: Gift,
    title: "Spreading Joy",
    description: "Every letter we write aims to create magical moments and lasting memories."
  },
  {
    icon: Heart,
    title: "Personal Touch",
    description: "Each letter is uniquely crafted with love and attention to detail."
  },
  {
    icon: Users,
    title: "Family First",
    description: "We believe in strengthening family bonds through magical experiences."
  },
  {
    icon: Sparkles,
    title: "Quality Promise",
    description: "Only the finest materials and most magical words make it into our letters."
  }
];

export function ValuesSection() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
          <p className="mt-4 text-lg text-gray-600">
            The principles that guide our magical operations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <ValueCard key={value.title} {...value} />
          ))}
        </div>
      </div>
    </div>
  );
}