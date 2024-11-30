import React, { useEffect } from 'react';

interface TallyFormProps {
  id?: string;
}

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

export function TallyForm({ id }: TallyFormProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <section id={id} className="relative py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Order Your Magical Letter
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Every letter is personally crafted with care and sprinkled with North Pole magic
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm pt-0 px-4">
          <iframe
            src="https://tally.so/r/mOj2ZR?transparentBackground=1&hideTitle=1&redirect=https://localhost:5173/thank-you"
            width="100%"
            height="1000"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Santa's Letters Order Form"
            style={{ overflow: 'hidden' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
