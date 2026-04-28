import { useEffect, useState } from "react";
import Achivements from "../components/sections/Achivements/Achivements";
import Demo from "../components/sections/Demo/Demo";
import Faq from "../components/sections/Faq/Faq";
import Features from "../components/sections/Features/Features";
import Hero from "../components/sections/Hero/Hero";
import Info from "../components/sections/Hero/Info/Info";
import HowItWorks from "../components/sections/HowItWorks/HowItWorks";
import Insights from "../components/sections/Insights/Insights";
import InteractiveCards from "../components/sections/InteractiveCards/InteractiveCards";
import Testimonials from "../components/sections/Testimonial/Testimonial";
import WhyUs from "../components/sections/WhyUs/WhyUs";
import { client } from "../lib/sanityClient";

export default function Home() {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "homePage"][0]`;

    client
      .fetch(query)
      .then((data) => {

        setHomeData(data); // ✅ store full data
        setLoading(false);
        console.log("homeData : ", data);
        
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);


  
  return (
    <>
      <Hero heroData={homeData?.hero} loading={loading} />
      <Info homeData={homeData?.heroIntro} />
      <Demo demoData={homeData?.demoSecton} />
      <WhyUs />
      <HowItWorks />
      <Features />
      <InteractiveCards />
      <Testimonials />
      <Insights />
      <Achivements />
      <Faq />
    </>
  );
}
