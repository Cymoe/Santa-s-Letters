import React, { useState } from 'react';
import { Building2, Users, Mail, Calendar } from 'lucide-react';
import { validateEmail } from '../../utils/validation';

interface CorporateFormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  numberOfLetters: string;
  preferredDeliveryDate: string;
  specialRequirements: string;
}

interface FormErrors {
  [key: string]: string;
}

export function CorporateOrderForm() {
  const [formData, setFormData] = useState<CorporateFormData>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    numberOfLetters: '',
    preferredDeliveryDate: '',
    specialRequirements: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!formData.numberOfLetters || parseInt(formData.numberOfLetters) < 10) {
      newErrors.numberOfLetters = 'Minimum order quantity is 10 letters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
    } catch (error) {
      alert('Submission failed. Please try again.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="mt-12 text-center">
        <div className="bg-green-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold text-green-800 mb-4">
            Thank You for Your Interest!
          </h3>
          <p className="text-green-700 mb-6">
            Our corporate team will review your request and contact you within 24 hours to discuss your custom package.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-12 space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
            Company Name
          </label>
          <div className="mt-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Building2 className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className={`pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 ${
                errors.companyName ? 'border-red-500' : ''
              }`}
              required
            />
            {errors.companyName && (
              <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="numberOfLetters" className="block text-sm font-medium text-gray-700">
            Number of Letters (min. 10)
          </label>
          <div className="mt-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Users className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              id="numberOfLetters"
              min="10"
              value={formData.numberOfLetters}
              onChange={handleChange}
              className={`pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 ${
                errors.numberOfLetters ? 'border-red-500' : ''
              }`}
              required
            />
            {errors.numberOfLetters && (
              <p className="mt-1 text-sm text-red-600">{errors.numberOfLetters}</p>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">
            Contact Person
          </label>
          <input
            type="text"
            id="contactName"
            value={formData.contactName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <div className="mt-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 ${
                errors.email ? 'border-red-500' : ''
              }`}
              required
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            required
          />
        </div>

        <div>
          <label htmlFor="preferredDeliveryDate" className="block text-sm font-medium text-gray-700">
            Preferred Delivery Date
          </label>
          <div className="mt-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="date"
              id="preferredDeliveryDate"
              value={formData.preferredDeliveryDate}
              onChange={handleChange}
              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              required
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="specialRequirements" className="block text-sm font-medium text-gray-700">
          Special Requirements or Notes
        </label>
        <textarea
          id="specialRequirements"
          value={formData.specialRequirements}
          onChange={handleChange}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          placeholder="Please include any specific requirements, branding needs, or special messages..."
        />
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Corporate Benefits</h3>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 bg-red-600 rounded-full"></span>
            Bulk order discounts available
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 bg-red-600 rounded-full"></span>
            Custom branding options
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 bg-red-600 rounded-full"></span>
            Dedicated account manager
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 bg-red-600 rounded-full"></span>
            Priority processing
          </li>
        </ul>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Submit Corporate Inquiry
        </button>
      </div>
    </form>
  );
}