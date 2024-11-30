import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { SectionSnowfall } from './SectionSnowfall';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
  id: string;
}

interface FAQProps {
  id?: string;
}

const faqs: FAQItem[] = [
  {
    category: "Ordering",
    question: "When should I place my order?",
    answer: "For guaranteed Christmas delivery, we recommend placing your order by December 10th. However, we can send Santa letters year-round for special occasions!",
    id: "ordering-1"
  },
  {
    category: "Ordering",
    question: "Can I order multiple letters?",
    answer: "Yes! You can order as many letters as you'd like. We offer special discounts for multiple orders.",
    id: "ordering-2"
  },
  {
    category: "Delivery",
    question: "How long does delivery take?",
    answer: "Standard delivery takes 7-10 business days. Express delivery (included in Ultimate Wonder package) takes 3-5 business days.",
    id: "delivery-1"
  },
  {
    category: "Delivery",
    question: "Do you ship internationally?",
    answer: "Yes! Santa's magic knows no borders. International delivery may take 10-15 business days.",
    id: "delivery-2"
  },
  {
    category: "Customization",
    question: "How personalized are the letters?",
    answer: "Each letter is uniquely crafted based on the information you provide. We can include specific details about the child's achievements, wishes, and special moments.",
    id: "customization-1"
  },
  {
    category: "Customization",
    question: "Can I preview the letter before it's sent?",
    answer: "While each letter is unique and magical, we can send you a digital proof for review upon request.",
    id: "customization-2"
  },
  {
    category: "Payment",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and digital wallets. All transactions are secure and encrypted.",
    id: "payment-1"
  },
  {
    category: "Payment",
    question: "Do you offer refunds?",
    answer: "We want every child to experience the magic of Santa. If you're not completely satisfied, we offer full refunds within 30 days of order.",
    id: "payment-2"
  }
];

export function FAQ({ id }: FAQProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(null);

  const toggleItem = (itemId: string) => {
    setOpenItem(prev => prev === itemId ? null : itemId);
  };

  const categories = Array.from(new Set(faqs.map(faq => faq.category)));

  return (
    <section id={id} className="relative bg-white py-16">
      <SectionSnowfall density={20} speed={0.3} />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to know about Santa's Letter Service
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {categories.map(category => (
            <div key={category} className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {category}
              </h2>
              <div className="space-y-4">
                {faqs
                  .filter(faq => faq.category === category)
                  .map((faq, index) => {
                    const uniqueId = `${category}-${index}`;
                    return (
                      <div
                        key={uniqueId}
                        className="border border-gray-200 rounded-lg"
                      >
                        <button
                          className="w-full px-6 py-4 flex justify-between items-center text-left"
                          onClick={() => toggleItem(uniqueId)}
                        >
                          <span className="font-medium text-gray-900">
                            {faq.question}
                          </span>
                          {openItem === uniqueId ? (
                            <ChevronUp className="h-5 w-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                          )}
                        </button>
                        <div 
                          className={`faq-answer ${openItem === uniqueId ? 'open' : ''}`}
                        >
                          <div className="px-6 pb-4 text-gray-600">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>

        <div id="contact" className="mt-16 text-center scroll-mt-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            We're here to help make your holiday season magical
          </p>
          <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}