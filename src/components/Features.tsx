import React from 'react';
import { Mail, Star, Gift, Sparkles } from 'lucide-react';

const features = [
  {
    title: "Handwritten by Santa",
    description: "Each letter is personally handwritten by Santa with love and care.",
    icon: Mail
  },
  {
    title: "Fully Personalized",
    description: "Include special details about the recipient to make it truly magical.",
    icon: Star
  },
  {
    title: "North Pole Postmark",
    description: "Authentic North Pole postmark and festive holiday stamps.",
    icon: Gift
  },
  {
    title: "Premium Quality",
    description: "Printed on premium parchment paper with wax seal.",
    icon: Sparkles
  }
];

export function Features() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The Magic in Every Letter
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            What makes our Santa letters special?
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mx-auto h-12 w-12 text-red-600">
                <feature.icon className="h-full w-full" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}