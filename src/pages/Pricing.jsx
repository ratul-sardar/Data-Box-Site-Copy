import Pricing from "../components/Pricing";
import Achivements from "../components/sections/Achivements/Achivements";
import Addons from "../components/sections/Addons/Addons";
import AgencyBanner from "../components/sections/AgencyBanner/AgencyBanner";
import Faq from "../components/sections/Faq/Faq";
import Testimonials from "../components/sections/Testimonial/Testimonial";

export default function PricingPage() {
  return (
    <>
      <Pricing />
      <Addons />
      <AgencyBanner />
      <Achivements />
      <Testimonials heading={false} />
      <Faq />
    </>
  );
}
