import React from 'react';
import { Check, Clock, Users, Sparkles } from 'lucide-react';
import { useWatchers } from '../hooks/useWatchers';
import { useCountdown } from '../hooks/useCountdown';

interface PricingOption {
  name: string;
  price: number;
  features: string[];
  recommended?: boolean;
  type: 'standard' | 'special' | 'ultimate';
  stockLeft?: number;
}

const pricingOptions: PricingOption[] = [
  {
    name: "Standard Magic",
    price: 14.99,
    type: 'standard',
    stockLeft: 150,
    features: [
      "Personalized letter from Santa",
      "North Pole postmark",
      "Basic envelope"
    ]
  },
  {
    name: "Extra Special",
    price: 24.99,
    type: 'special',
    recommended: true,
    stockLeft: 75,
    features: [
      "Personalized letter from Santa",
      "North Pole postmark",
      "Premium envelope with wax seal",
      "Nice List certificate",
      "Personalized PS note"
    ]
  },
  {
    name: "Ultimate Wonder",
    price: 39.99,
    type: 'ultimate',
    stockLeft: 25,
    features: [
      "Personalized letter from Santa",
      "North Pole postmark",
      "Luxury envelope with gold wax seal",
      "Nice List certificate",
      "Personalized PS note",
      "Small gift from the elves",
      "Express delivery"
    ]
  }
];

export function PricingCard() {
  const scrollToOrder = (packageType: 'standard' | 'special' | 'ultimate') => {
    const orderForm = document.getElementById('order');
    if (orderForm) {
      const packageSelect = document.getElementById('packageType') as HTMLSelectElement;
      if (packageSelect) {
        packageSelect.value = packageType;
        const event = new Event('change', { bubbles: true });
        packageSelect.dispatchEvent(event);
      }
      orderForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const timeLeft = useCountdown();

  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Choose Your Magic
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Select the perfect package for your little one
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-2 text-red-600">
              <Clock className="h-5 w-5" />
              <span className="font-medium">Time until Christmas:</span>
            </div>
            <div className="flex gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-red-600">{timeLeft.days}</div>
                <div className="text-sm text-gray-600">Days</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">{timeLeft.hours}</div>
                <div className="text-sm text-gray-600">Hours</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">{timeLeft.minutes}</div>
                <div className="text-sm text-gray-600">Minutes</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">{timeLeft.seconds}</div>
                <div className="text-sm text-gray-600">Seconds</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pricingOptions.map((option) => (
            <div
              key={option.name}
              className={`rounded-lg border ${
                option.recommended
                  ? 'border-red-600 shadow-red-100'
                  : 'border-gray-200'
              } p-8 shadow-lg relative flex flex-col h-full`}
            >
              {option.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                <Users className="h-4 w-4" />
                <span>{useWatchers(option.type)} people viewing this package</span>
              </div>

              {option.stockLeft && option.stockLeft < 100 && (
                <div className="absolute -top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>Only {option.stockLeft} left!</span>
                </div>
              )}

              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 sparkle">{option.name}</h3>
                <p className="mt-4 text-3xl font-bold text-gray-900 sparkle">
                  ${option.price}
                </p>
                <ul className="mt-6 space-y-4">
                  {option.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => scrollToOrder(option.type)}
                className={`mt-8 w-full rounded-md px-4 py-2 text-base font-semibold ${
                  option.recommended
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                } transition-colors duration-200`}
              >
                Select Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}