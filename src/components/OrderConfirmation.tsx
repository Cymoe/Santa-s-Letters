import React from 'react';
import { CheckCircle, Gift } from 'lucide-react';

interface OrderConfirmationProps {
  orderDetails: {
    recipientName: string;
    orderNumber: string;
    estimatedDelivery: string;
  };
  onClose: () => void;
}

export function OrderConfirmation({ orderDetails, onClose }: OrderConfirmationProps) {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          
          <h2 className="mt-4 text-2xl font-bold text-gray-900">Order Confirmed!</h2>
          
          <div className="mt-4 p-4 bg-red-50 rounded-lg">
            <Gift className="h-8 w-8 text-red-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600">
              Santa and his elves are preparing a magical letter for
            </p>
            <p className="text-lg font-semibold text-red-700">{orderDetails.recipientName}</p>
          </div>
          
          <div className="mt-4 space-y-2 text-left">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Order Number:</span> {orderDetails.orderNumber}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Estimated Delivery:</span> {orderDetails.estimatedDelivery}
            </p>
          </div>
          
          <p className="mt-4 text-sm text-gray-600">
            We've sent a confirmation email with tracking details. The North Pole's finest 
            calligraphers are working their magic!
          </p>
          
          <div className="mt-6">
            <button
              onClick={onClose}
              className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}