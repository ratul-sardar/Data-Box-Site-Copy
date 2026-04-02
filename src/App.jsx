import Features from "./components/sections/Features/Features";
import Hero from "./components/sections/Hero/Hero";
import Info from "./components/sections/Hero/Info/Info";
import HowItWorks from "./components/sections/HowItWorks/HowItWorks";
import WhyUs from "./components/sections/WhyUs/WhyUs";
import NavBar from "./components/ui/NavBar/NavBar";

export default function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Hero></Hero>
        <Info></Info>
        <WhyUs></WhyUs>
        <HowItWorks></HowItWorks>
        <Features></Features>
      </main>
      <footer></footer>
    </>
  );
}
