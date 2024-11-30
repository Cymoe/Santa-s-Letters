import React from 'react';
import { CandyCane, Snowflake, Star } from 'lucide-react';

export function Logo() {
  return (
    <div className="relative inline-block">
      <CandyCane className="h-16 w-16 text-red-400" />
      <Snowflake className="absolute -top-2 -right-2 h-8 w-8 text-blue-200 animate-spin-slow" />
      <Star className="absolute -bottom-1 -left-1 h-6 w-6 text-yellow-400 animate-pulse" />
    </div>
  );
}