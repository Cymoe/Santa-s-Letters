import React from 'react';
import { NiceListCertificate } from './NiceListCertificate';
import { Star, Award, Gift } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

export function NiceListPage() {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <div className="relative bg-red-700 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512389142860-9c449e58a543')] bg-cover bg-center opacity-20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Santa's Nice List Certificate</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A magical recognition of your child's wonderful behavior throughout the year
          </p>
        </div>
      </div>

      {/* Certificate Preview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <NiceListCertificate 
              childName="Example Child"
              achievements={[
                "Being kind to siblings",
                "Helping with household chores",
                "Excellent school attendance"
              ]}
            />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes It Special</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Star className="h-6 w-6 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Official Recognition</h3>
                    <p className="text-gray-600">Each certificate is personally approved by Santa himself</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="h-6 w-6 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Personalized Achievements</h3>
                    <p className="text-gray-600">Highlights your child's specific good deeds and accomplishments</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Gift className="h-6 w-6 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Premium Quality</h3>
                    <p className="text-gray-600">Printed on luxury parchment with gold accents and wax seal</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Available In Our Packages</h2>
              <p className="text-gray-600 mb-6">
                The Nice List Certificate is included in our Extra Special and Ultimate Wonder packages, 
                adding an extra touch of magic to your child's Christmas experience.
              </p>
              <HashLink 
                smooth 
                to="/#order"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
              >
                Order Your Certificate Today
              </HashLink>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">A Keepsake They'll Treasure</h2>
            <p className="text-gray-600 mb-8">
              The Nice List Certificate isn't just a piece of paper – it's a magical document that 
              validates your child's good behavior and creates lasting memories. Each certificate is 
              designed to be preserved and cherished for years to come.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">Archival Quality</h3>
                <p className="text-gray-600">Printed on premium paper that will last for generations</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">Authentic Details</h3>
                <p className="text-gray-600">Features the official North Pole seal and Santa's signature</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">Custom Frame Ready</h3>
                <p className="text-gray-600">Standard size fits perfectly in most frames</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}