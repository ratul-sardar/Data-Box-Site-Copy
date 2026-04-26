import React, { useEffect, useState } from 'react';
import { client } from '../lib/sanityClient';
import * as LucideIcons from 'lucide-react';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "homePage"][0]{ services }`;
    
    client.fetch(query)
      .then((data) => {
        setServices(data?.services || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching services:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="flex justify-center p-20">Loading services...</div>;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = LucideIcons[service.icon] || LucideIcons.HelpCircle;
            return (
              <div key={index} className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
