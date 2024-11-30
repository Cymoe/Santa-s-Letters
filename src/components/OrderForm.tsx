import React, { useState } from 'react';
import { OrderConfirmation } from './OrderConfirmation';
import { CorporateOrderForm } from './corporate/CorporateOrderForm';
import { pb, type OrderCreate } from '../lib/pocketbase';
import { Building2 } from 'lucide-react';
import { SectionSnowfall } from './SectionSnowfall';

interface FormData {
  recipientName: string;
  recipientAge: string;
  address: string;
  specialMessage: string;
  senderName: string;
  email: string;
  packageType: 'standard' | 'special' | 'ultimate';
}

interface FormErrors {
  [key: string]: string;
}

interface OrderFormProps {
  id?: string;
}

export function OrderForm({ id }: OrderFormProps) {
  const [showCorporate, setShowCorporate] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    recipientName: '',
    recipientAge: '',
    address: '',
    specialMessage: '',
    senderName: '',
    email: '',
    packageType: 'special'
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    recipientName: '',
    orderNumber: '',
    estimatedDelivery: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!validateAge(formData.recipientAge)) {
      newErrors.recipientAge = 'Age must be between 1 and 18';
    }

    if (!validatePostalAddress(formData.address)) {
      newErrors.address = 'Please enter a complete postal address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const orderData: OrderCreate = {
        childName: formData.recipientName,
        childAge: parseInt(formData.recipientAge),
        packageType: formData.packageType,
        parentName: formData.senderName,
        email: formData.email,
        address: formData.address,
        specialRequests: formData.specialMessage
      };

      await pb.collection('orders').create(orderData);
      setShowConfirmation(true);
    } catch (err) {
      console.error('Error submitting order:', err);
      setError('There was an error submitting your order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={id} className="relative py-16 bg-white">
      <SectionSnowfall density={25} speed={0.4} />
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              {showCorporate ? 'Corporate Orders' : 'Order Your Magical Letter'}
            </h2>
            <div className="mt-4 flex justify-center gap-4">
              <button
                onClick={() => setShowCorporate(false)}
                className={`px-4 py-2 rounded-md ${
                  !showCorporate 
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                Individual Order
              </button>
              <button
                onClick={() => setShowCorporate(true)}
                className={`px-4 py-2 rounded-md flex items-center gap-2 ${
                  showCorporate 
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                <Building2 className="h-5 w-5" />
                Corporate Order
              </button>
            </div>
          </div>

          {showCorporate ? (
            <CorporateOrderForm />
          ) : (
            <form onSubmit={handleSubmit} className="mt-12 space-y-6">
              <div>
                <label htmlFor="packageType" className="block text-sm font-medium text-gray-700">
                  Select Package
                </label>
                <select
                  id="packageType"
                  value={formData.packageType}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                >
                  <option value="standard">Standard Magic ($14.99)</option>
                  <option value="special">Extra Special ($24.99)</option>
                  <option value="ultimate">Ultimate Wonder ($39.99)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="recipientName" className="block text-sm font-medium text-gray-700">
                    Child's Name
                  </label>
                  <input
                    type="text"
                    id="recipientName"
                    value={formData.recipientName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="recipientAge" className="block text-sm font-medium text-gray-700">
                    Child's Age
                  </label>
                  <input
                    type="number"
                    id="recipientAge"
                    value={formData.recipientAge}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 ${
                      errors.recipientAge ? 'border-red-500' : ''
                    }`}
                    required
                  />
                  {errors.recipientAge && (
                    <p className="mt-1 text-sm text-red-600">{errors.recipientAge}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Delivery Address
                </label>
                <textarea
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={3}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 ${
                    errors.address ? 'border-red-500' : ''
                  }`}
                  required
                />
                {errors.address && (
                  <p className="mt-1 text-sm text-red-600">{errors.address}</p>
                )}
              </div>

              <div>
                <label htmlFor="specialMessage" className="block text-sm font-medium text-gray-700">
                  Special Message or Details
                </label>
                <textarea
                  id="specialMessage"
                  value={formData.specialMessage}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  placeholder="Include any special achievements, wishes, or details you'd like Santa to mention..."
                />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="senderName" className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="senderName"
                    value={formData.senderName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                    required
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  {isSubmitting ? "Submitting..." : "Send to Santa's Workshop"}
                </button>
                {error && (
                  <p className="mt-2 text-sm text-red-600">{error}</p>
                )}
              </div>
            </form>
          )}
        </div>

        {showConfirmation && (
          <OrderConfirmation
            orderDetails={orderDetails}
            onClose={() => {
              setShowConfirmation(false);
              setFormData({
                recipientName: '',
                recipientAge: '',
                address: '',
                specialMessage: '',
                senderName: '',
                email: '',
                packageType: 'special'
              });
            }}
          />
        )}
      </div>
    </section>
  );
}