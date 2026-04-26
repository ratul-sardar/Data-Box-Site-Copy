import React, { useEffect, useState } from 'react';
import { client, urlFor } from '../lib/sanityClient';

const Hero = () => {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "homePage"][0]{ hero }`;
    
    client.fetch(query)
      .then((data) => {
        setHeroData(data?.hero);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching hero data:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="h-96 flex items-center justify-center">Loading...</div>;
  if (!heroData) return null;

  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden bg-gray-900">
      {heroData.backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img 
            src={urlFor(heroData.backgroundImage).url()} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
      )}
      
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            {heroData.heading}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed">
            {heroData.subheading}
          </p>
          {heroData.ctaText && (
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
              {heroData.ctaText}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
