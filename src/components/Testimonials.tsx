import React from 'react';
import { TestimonialGrid } from './testimonials/TestimonialGrid';

export function Testimonials() {
  const scrollToOrder = () => {
    const orderSection = document.getElementById('order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Parents Are Saying
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join thousands of families who've experienced the magic
          </p>
        </div>

        <div className="mt-16">
          <TestimonialGrid />
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg font-medium text-gray-900">
            Join over 10,000 happy families who've experienced Santa's magic
          </p>
          <button 
            onClick={scrollToOrder}
            className="mt-6 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
          >
            Order Your Letter Today
          </button>
        </div>
      </div>
    </div>
  );
}