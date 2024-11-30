import React from 'react';

export function TermsOfService() {
  return (
    <div className="pt-16 pb-24 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-red max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            Last updated: December 25, 2023
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing and placing an order with Santa's Letters, you confirm that you are in agreement with and bound by these terms of service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services</h2>
            <p className="text-gray-600 mb-4">
              We provide personalized letter services from Santa Claus, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Customized letters based on provided information</li>
              <li>Various package options with different features</li>
              <li>Delivery services to specified addresses</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Ordering and Payment</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>All orders must be placed through our website</li>
              <li>Prices are listed in USD and subject to change</li>
              <li>Payment is required at the time of order</li>
              <li>We accept major credit cards and digital payment methods</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Delivery</h2>
            <p className="text-gray-600 mb-4">
              Delivery times are estimates and not guaranteed. Factors that may affect delivery include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Holiday season volume</li>
              <li>Weather conditions</li>
              <li>Shipping destination</li>
              <li>Accuracy of provided address</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Refunds and Cancellations</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Orders can be cancelled within 24 hours for full refund</li>
              <li>Refunds available within 30 days if letter is not received</li>
              <li>Customization errors due to incorrect information provided are not eligible for refund</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Content Guidelines</h2>
            <p className="text-gray-600">
              We reserve the right to refuse any order containing inappropriate content or requests. All content must be suitable for children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Information</h2>
            <p className="text-gray-600">
              For questions about these terms, please contact us at legal@santasletters.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}