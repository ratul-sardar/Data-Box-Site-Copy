import { useEffect, useState } from "react";
import AgencyBanner from "../components/sections/AgencyBanner/AgencyBanner";
import PricingHero from "../components/sections/PricingHero/PricingHero";
import { client } from "../lib/sanityClient";
import Addons from "../components/sections/Addons/Addons";
import Achivements from "../components/sections/Achivements/Achivements";
import Testimonials from "../components/sections/Testimonial/Testimonial";
import Faq from "../components/sections/Faq/Faq";

export default function Pricing() {
  const [sanityData, setSanityData] = useState(null);
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch(`*[_type == "pricingPage"][0]`)
      .then((data) => {
        setSanityData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching pricing data:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    client.fetch(`*[_type == "homePage"][0]`)
      .then((data) => {
        setHomeData(data);
      })
      .catch((error) => {
        console.error("Error fetching home data:", error);
      });
  }, []);




  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#7347ea] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-500 font-medium tracking-wide">Loading pricing experience...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <PricingHero sanityData={sanityData} loading={loading} />
      <Addons addonsData={sanityData?.addonsSection} />
      <AgencyBanner agencyBannerData={sanityData?.agencyBannerSection} />
      <Achivements achievementsData={homeData?.achievementsSection} />
      <Testimonials testimonialsData={homeData?.testimonialsSection} />
      <Faq faqData={homeData?.faqSection} />

    </>
  );
}

