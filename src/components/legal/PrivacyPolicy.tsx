import React from 'react';

export function PrivacyPolicy() {
  return (
    <div className="pt-16 pb-24 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="mt-4 text-lg text-gray-600">Last updated: December 25, 2023</p>
        </div>
        
        <div className="prose prose-red max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600">
              At Santa's Letters, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you visit our website and use our letter service. 
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
              please do not access the site.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-gray-900">Personal Information</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Names and ages of letter recipients</li>
                <li>Parent/guardian contact information</li>
                <li>Shipping and billing addresses</li>
                <li>Email addresses</li>
                <li>Phone numbers (optional)</li>
                <li>Payment information</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mt-6">Letter Content Information</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Special achievements or events mentioned in letter requests</li>
                <li>Gift wishes and preferences</li>
                <li>Personal details provided for letter customization</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>To process and fulfill your letter orders</li>
              <li>To communicate with you about your order status</li>
              <li>To send order confirmations and shipping updates</li>
              <li>To personalize Santa's letters with provided details</li>
              <li>To improve our services and customer experience</li>
              <li>To process payments and prevent fraud</li>
              <li>To respond to customer service inquiries</li>
              <li>To send marketing communications (with your consent)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-gray-600 mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Service providers who assist in our operations</li>
              <li>Payment processors for secure transaction handling</li>
              <li>Shipping partners for order delivery</li>
              <li>Legal authorities when required by law</li>
            </ul>
            <p className="text-gray-600 mt-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties for marketing purposes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>SSL encryption for data transmission</li>
              <li>Secure data storage systems</li>
              <li>Regular security assessments</li>
              <li>Limited staff access to personal information</li>
              <li>Employee training on data protection</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Children's Privacy</h2>
            <p className="text-gray-600">
              Our service is intended for use by parents and guardians. We do not knowingly collect personal information 
              from children under 13 without verifiable parental consent. If you believe we have inadvertently collected 
              such information, please contact us immediately.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights</h2>
            <p className="text-gray-600 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request data portability</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-600">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new 
              privacy policy on this page and updating the "Last updated" date at the top of this policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600">Email: privacy@santasletters.com</p>
              <p className="text-gray-600">Phone: 1-800-SANTA-LETTERS</p>
              <p className="text-gray-600">Address: North Pole Headquarters, Arctic Circle</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}