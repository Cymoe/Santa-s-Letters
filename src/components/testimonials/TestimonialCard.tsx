import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  content: string;
  rating: number;
  childAge?: string;
  year?: string;
}

export function TestimonialCard({
  name,
  location,
  content,
  rating,
  childAge,
  year
}: TestimonialCardProps) {
  return (
    <div className="relative bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Quote className="absolute top-6 right-6 h-8 w-8 text-red-100" />
      
      <div>
        <div>
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{location}</p>
          {childAge && (
            <p className="text-xs text-red-600">Parent of {childAge} year old</p>
          )}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <div className="flex">
          {[...Array(rating)].map((_, i) => (
            <Star
              key={i}
              className="h-5 w-5 text-yellow-400 fill-current"
            />
          ))}
        </div>
        {year && (
          <span className="text-sm text-gray-500">• {year}</span>
        )}
      </div>

      <p className="mt-4 text-gray-600">{content}</p>
    </div>
  );
}