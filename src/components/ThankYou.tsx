import React from 'react';
import { Link } from 'react-router-dom';

export function ThankYou() {
  return (
    <div className="frost-border bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-8 sm:p-12">
      <div className="text-center">
        <div className="mb-8">
          <div className="animate-bounce text-7xl mb-8">
            🎅
          </div>
          <h2 className="text-4xl font-extrabold text-red-600 mb-6">
            Thank You!
          </h2>
          <p className="text-xl text-gray-600">
            Your magical letter request has been received at the North Pole! 🎄
          </p>
        </div>
        
        <div className="space-y-6 mb-10">
          <p className="text-lg text-gray-500">
            Santa and his elves are already working on crafting your special letter with care and magic.
          </p>
          <p className="text-lg text-gray-500">
            Keep an eye on your email for updates about your magical letter's journey!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors shadow-sm hover:shadow-md"
          >
            Return Home
          </Link>
          <Link
            to="/#order"
            className="inline-flex items-center px-8 py-4 border-2 border-red-600 text-lg font-medium rounded-md text-red-600 bg-transparent hover:bg-red-50 transition-colors shadow-sm hover:shadow-md"
          >
            Place Another Order
          </Link>
        </div>
      </div>
    </div>
  );
}
