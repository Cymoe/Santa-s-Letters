import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { CountdownTimer } from './common/CountdownTimer';

export function UrgencyBanner() {
  // Set deadline to December 10th of the current year
  const currentYear = new Date().getFullYear();
  const deadline = new Date(currentYear, 11, 10); // Month is 0-based, so 11 is December

  return (
    <div className="bg-red-50 border-b border-red-100">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2 text-red-700">
            <AlertTriangle className="h-5 w-5" />
            <span className="font-medium">Order by December 10th for guaranteed Christmas delivery!</span>
          </div>
          <CountdownTimer targetDate={deadline} />
        </div>
      </div>
    </div>
  );
}