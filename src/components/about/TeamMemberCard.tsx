import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  image: string;
}

export function TeamMemberCard({ name, role, description, image }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-red-600 mb-3">{role}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}