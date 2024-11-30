import React from 'react';

export function AboutHero() {
  return (
    <div className="w-screen relative bg-red-700 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576919228236-a097c32a5cd4')] bg-cover bg-fixed bg-center opacity-20" />
      </div>
      <div className="w-full py-32">
        <div className="w-full text-center px-6 md:px-12 lg:px-24">
          <h1 className="text-5xl font-bold mb-6">Our Magical Story</h1>
          <div className="w-24 h-1 bg-white mx-auto rounded-full mb-8"></div>
          <p className="text-2xl w-full leading-relaxed max-w-5xl mx-auto">
            For centuries, we've been bringing joy to children around the world through
            personalized letters from Santa Claus himself. Each letter carries a sprinkle
            of North Pole magic and a touch of Christmas wonder.
          </p>
        </div>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-6 md:px-12 lg:px-24">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Magical Heritage</h3>
            <p className="text-lg opacity-90">
              A tradition passed down through generations of Santa's most trusted elves.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Personal Touch</h3>
            <p className="text-lg opacity-90">
              Every letter is uniquely crafted with care and attention to detail.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Christmas Magic</h3>
            <p className="text-lg opacity-90">
              Spreading joy and wonder to children all around the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}