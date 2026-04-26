import React, { useEffect, useState } from 'react';
import { client } from '../lib/sanityClient';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [pricingData, setPricingData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "pricingPage"][0]`;
    
    client.fetch(query)
      .then((data) => {
        setPricingData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching pricing:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="flex justify-center p-20">Loading plans...</div>;
  if (!pricingData) return null;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">{pricingData.title}</h2>
        <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
          {pricingData.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingData.plans?.map((plan, index) => (
            <div 
              key={index} 
              className={`p-10 rounded-3xl border ${
                plan.isPopular ? 'border-blue-500 shadow-xl relative' : 'border-gray-200'
              }`}
            >
              {plan.isPopular && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="flex items-baseline justify-center mb-6">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="text-gray-500 ml-2">{plan.period}</span>
              </div>
              <ul className="text-left space-y-4 mb-10">
                {plan.features?.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <Check className="text-green-500 mr-3 shrink-0" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-semibold transition-all ${
                plan.isPopular 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                {plan.buttonText || 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
