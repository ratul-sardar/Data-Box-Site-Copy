import Achivements from "./components/sections/Achivements/Achivements";
import Features from "./components/sections/Features/Features";
import Hero from "./components/sections/Hero/Hero";
import Info from "./components/sections/Hero/Info/Info";
import HowItWorks from "./components/sections/HowItWorks/HowItWorks";
import Insights from "./components/sections/Insights/Insights";
import WhyUs from "./components/sections/WhyUs/WhyUs";
import NavBar from "./components/ui/NavBar/NavBar";

export default function App() {
  return (
    <>
      <header className="sticky top-0 bg-black/15 border-b border-gray-300 backdrop-blur-sm z-50">
        <NavBar></NavBar>
      </header>
      <main>
        <Hero></Hero>
        <Info></Info>
        <WhyUs></WhyUs>
        <HowItWorks></HowItWorks>
        <Features></Features>
        <Insights></Insights>
        <Achivements></Achivements>
      </main>
      <footer></footer>
    </>
  );
}
