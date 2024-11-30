import React, { useState } from 'react';
import { Package, Truck, CheckCircle } from 'lucide-react';

export function OrderTracking() {
  const [orderNumber, setOrderNumber] = useState('');
  const [trackingStatus, setTrackingStatus] = useState<null | {
    status: 'processing' | 'shipped' | 'delivered';
    lastUpdate: string;
    location: string;
  }>(null);

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate tracking status
    setTrackingStatus({
      status: 'processing',
      lastUpdate: new Date().toLocaleDateString(),
      location: 'North Pole Workshop'
    });
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Track Your Letter</h2>
          <p className="mt-2 text-gray-600">
            Enter your order number to see the status of your magical letter
          </p>
        </div>

        <form onSubmit={handleTrackOrder} className="mt-8">
          <div className="flex gap-4">
            <input
              type="text"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              placeholder="Enter order number (e.g., SANTA-ABC123)"
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              required
            />
            <button
              type="submit"
              className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            >
              Track Order
            </button>
          </div>
        </form>

        {trackingStatus && (
          <div className="mt-8 rounded-lg bg-white p-6 shadow-md">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  {trackingStatus.status === 'processing' && <Package className="h-6 w-6 text-green-600" />}
                  {trackingStatus.status === 'shipped' && <Truck className="h-6 w-6 text-green-600" />}
                  {trackingStatus.status === 'delivered' && <CheckCircle className="h-6 w-6 text-green-600" />}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {trackingStatus.status === 'processing' && 'Being Prepared'}
                    {trackingStatus.status === 'shipped' && 'On the Way'}
                    {trackingStatus.status === 'delivered' && 'Delivered'}
                  </p>
                  <p className="text-sm text-gray-500">
                    Last updated: {trackingStatus.lastUpdate}
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm text-gray-600">
                  Current Location: {trackingStatus.location}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}