import Hero from "../components/Hero";
import Services from "../components/Services";
import Achivements from "../components/sections/Achivements/Achivements";
import Demo from "../components/sections/Demo/Demo";
import Faq from "../components/sections/Faq/Faq";
import Features from "../components/sections/Features/Features";
import Info from "../components/sections/Hero/Info/Info";
import HowItWorks from "../components/sections/HowItWorks/HowItWorks";
import Insights from "../components/sections/Insights/Insights";
import InteractiveCards from "../components/sections/InteractiveCards/InteractiveCards";
import Testimonials from "../components/sections/Testimonial/Testimonial";
import WhyUs from "../components/sections/WhyUs/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Info />
      <Demo />
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
