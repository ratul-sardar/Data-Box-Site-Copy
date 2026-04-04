import Achivements from "./components/sections/Achivements/Achivements";
import Demo from "./components/sections/Demo/Demo";
import Faq from "./components/sections/Faq/Faq";
import Features from "./components/sections/Features/Features";
import Hero from "./components/sections/Hero/Hero";
import Info from "./components/sections/Hero/Info/Info";
import HowItWorks from "./components/sections/HowItWorks/HowItWorks";
import Insights from "./components/sections/Insights/Insights";
import InteractiveCards from "./components/sections/InteractiveCards/InteractiveCards";
import Testimonials from "./components/sections/Testimonial/Testimonial";
import WhyUs from "./components/sections/WhyUs/WhyUs";
import Footer from "./components/ui/Footer/Footer";
import Navbar from "./components/ui/NavBar/NavBar";

export default function App() {
  return (
    <>
      <header className="sticky top-0 bg-black/15 border-b border-gray-300 backdrop-blur-sm z-50">
        <Navbar></Navbar>
      </header>
      <main>
        <Hero></Hero>
        <Info></Info>
        <Demo></Demo>
        <WhyUs></WhyUs>
        <HowItWorks></HowItWorks>
        <Features></Features>
        <InteractiveCards></InteractiveCards>
        <Testimonials></Testimonials>
        <Insights></Insights>
        <Achivements></Achivements>
        <Faq></Faq>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}
