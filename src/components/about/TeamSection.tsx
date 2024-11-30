import React from 'react';
import { TeamMemberCard } from './TeamMemberCard';

const teamMembers = [
  {
    name: "Nicholas Klaus",
    role: "Head of Letter Writing",
    description: "With over 300 years of experience bringing joy to children worldwide.",
    image: "https://images.unsplash.com/photo-1545996124-0501ebae84d0?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Holly Winter",
    role: "Chief Elf Officer",
    description: "Ensures every letter meets our magical quality standards.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Jack Frost",
    role: "Delivery Specialist",
    description: "Makes sure letters arrive through any weather condition.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400"
  }
];

export function TeamSection() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Meet the Team</h2>
          <p className="mt-4 text-lg text-gray-600">
            The magical beings behind every special letter
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}