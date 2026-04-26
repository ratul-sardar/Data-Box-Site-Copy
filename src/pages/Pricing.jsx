import Achivements from "../components/sections/Achivements/Achivements";
import Addons from "../components/sections/Addons/Addons";
import AgencyBanner from "../components/sections/AgencyBanner/AgencyBanner";
import Faq from "../components/sections/Faq/Faq";
import PricingHero from "../components/sections/PricingHero/PricingHero";
import Testimonials from "../components/sections/Testimonial/Testimonial";
import AddonCard from "../components/ui/AddonCard/AddonCard";

export default function Pricing() {
  return (
    <>
      <PricingHero></PricingHero>
      <Addons></Addons>
      <AgencyBanner></AgencyBanner>
      <Achivements />
      <Testimonials heading={false} />
      <Faq />
    </>
  );
}
