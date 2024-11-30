import React from 'react';
import { Star, Award, Sparkles } from 'lucide-react';

interface NiceListCertificateProps {
  childName: string;
  year?: number;
  achievements?: string[];
}

export function NiceListCertificate({ 
  childName, 
  year = new Date().getFullYear(),
  achievements = []
}: NiceListCertificateProps) {
  return (
    <div className="relative w-full max-w-2xl mx-auto p-8 bg-cream border-8 border-double border-red-800">
      <div className="absolute top-4 left-4">
        <Star className="h-8 w-8 text-red-600 fill-current" />
      </div>
      <div className="absolute top-4 right-4">
        <Star className="h-8 w-8 text-red-600 fill-current" />
      </div>
      
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <Award className="h-16 w-16 text-red-600" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-3xl font-serif text-red-800">Official Certificate</h1>
          <h2 className="text-xl font-medium">Santa's Nice List {year}</h2>
        </div>
        
        <div className="my-8 space-y-4">
          <p className="text-lg">This certifies that</p>
          <p className="text-2xl font-bold text-red-800">{childName}</p>
          <p className="text-lg">has demonstrated exceptional kindness and good behavior</p>
          <p className="text-lg">and is officially recognized as being on</p>
          <p className="text-3xl font-bold text-red-800 font-serif">Santa's Nice List</p>
        </div>
        
        {achievements.length > 0 && (
          <div className="mt-6 space-y-2">
            <p className="text-lg font-medium">Special Recognition for:</p>
            <ul className="text-gray-700 space-y-1">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-center justify-center gap-2">
                  <Sparkles className="h-4 w-4 text-red-600" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="mt-8 space-y-4">
          <div className="flex justify-center items-center gap-4">
            <img 
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjQuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjMtMTItMjVUMTI6MDA6MDAtMDU6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTItMjVUMTI6MDA6MDAtMDU6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTEyLTI1VDEyOjAwOjAwLTA1OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmE1ZDM5ZjQ0LWRiNWUtNDRlZi1hMTYyLWZhZDM5MzA1NDg3YyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjIyYzFkYjBiLTQ5ZDAtNDM0Ny05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" 
              alt="North Pole Seal"
              className="w-16 h-16"
            />
            <div className="text-center">
              <p className="text-lg italic font-serif">Santa Claus</p>
              <p className="text-sm text-gray-600">North Pole</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">Official North Pole Document - {year}</p>
        </div>
      </div>
    </div>
  );
}