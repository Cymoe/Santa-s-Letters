import React from 'react';
import { TestimonialCard } from './TestimonialCard';

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "California, USA",
    content: "The joy in my daughter's eyes when she received her personalized letter from Santa was priceless. Every detail was magical!",
    rating: 5,
    childAge: "6",
    year: "2023"
  },
  {
    name: "Michael Thompson",
    location: "London, UK",
    content: "We've made this our yearly tradition. The quality and attention to detail in each letter makes Christmas even more special.",
    rating: 5,
    childAge: "8",
    year: "2023"
  },
  {
    name: "Emma Rodriguez",
    location: "Toronto, Canada",
    content: "The personalized details about my son's achievements made him believe in the magic of Christmas even more. Thank you!",
    rating: 5,
    childAge: "7",
    year: "2023"
  },
  {
    name: "David Chen",
    location: "Sydney, Australia",
    content: "Even in our summer Christmas, the letter brought the North Pole magic to our home. Our kids were overjoyed!",
    rating: 5,
    childAge: "5",
    year: "2023"
  },
  {
    name: "Lisa Anderson",
    location: "New York, USA",
    content: "The quality of the paper, the wax seal, and the personalized message - everything was perfect. Worth every penny!",
    rating: 5,
    childAge: "9",
    year: "2023"
  },
  {
    name: "James Wilson",
    location: "Dublin, Ireland",
    content: "This service has helped keep the Christmas magic alive for our children. The letters are beautifully crafted.",
    rating: 5,
    childAge: "4",
    year: "2023"
  }
];

export function TestimonialGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          {...testimonial}
        />
      ))}
    </div>
  );
}