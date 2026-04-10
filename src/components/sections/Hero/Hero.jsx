import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import PrimaryButton from "../../ui/Button/PrimaryButton";

import AIAnalyst from "../../../assets/hero-explore-key-feature-image/genie-chat-with-prompt-selection-and-floating-integrations-2x.png";
import Dashboards from "../../../assets/hero-explore-key-feature-image/dashboards-2x.png";
import Reports from "../../../assets/hero-explore-key-feature-image/reports-2x.png";
import MetricsKPIs from "../../../assets/hero-explore-key-feature-image/metric-builder-2x.png";
import GoalsOKRs from "../../../assets/hero-explore-key-feature-image/goals-2x.png";
import Forecasts from "../../../assets/hero-explore-key-feature-image/forecasts-2x.png";
import Mcp from "../../../assets/hero-explore-key-feature-image/mcp.png";
import Integrations from "../../../assets/hero-explore-key-feature-image/integrations-2x.png";
import DataPreparation from "../../../assets/hero-explore-key-feature-image/datasets-2x.png";
import HeroBg from "../../../assets/data-workflow.png";
import {
  BrainCog,
  ChartColumnIncreasing,
  DatabaseZap,
  FileText,
  KeyboardIcon,
  Plug,
  Save,
  Target,
  Wallpaper,
} from "lucide-react";

const features = [
  { title: "AI Analyst", icon: <BrainCog />, image: AIAnalyst },
  { title: "Dashboards", icon: <Wallpaper />, image: Dashboards },
  { title: "Reports", icon: <FileText />, image: Reports },
  { title: "Metrics & KPIs", icon: <KeyboardIcon />, image: MetricsKPIs },
  { title: "Goals & OKRs", icon: <Target />, image: GoalsOKRs },
  { title: "Forecasts", icon: <ChartColumnIncreasing />, image: Forecasts },
  { title: "MCP", icon: <Save />, image: Mcp },
  { title: "Integrations", icon: <Plug />, image: Integrations },
  { title: "Data Preparation", icon: <DatabaseZap />, image: DataPreparation },
];

export default function Hero() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    // Switch features every 3.5 seconds
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section id="Hero" className={`overflow-hidden pt-20`}
      style={{
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="cssContainer">
        <header className="grid place-items-center gap-6 text-center max-md:text-left">
          {/* Icons*/}
          <div className="flex items-center gap-4">
            {/* Item 1*/}
            <div className="flex items-center gap-2 p-1 border-r border-gray-400/70 ">
              <div className="rounded-full">
                <img
                  src="https://databox.com/wp-content/themes/databox/inc/img/templates/ratings/logo-g2.svg"
                  alt="logo-g2"
                />
              </div>

              <p className="font-bold text-gray-600">4.4</p>
              <span className="text-yellow-400">
                <FaStar />
              </span>
            </div>

            {/* Item 2*/}
            <div className="flex items-center gap-2 p-1 border-r border-gray-400/70  ">
              <div className="rounded-full">
                <img
                  src="https://databox.com/wp-content/themes/databox/inc/img/templates/ratings/logo-capterra.svg"
                  alt="logo-capterra"
                />
              </div>

              <p className="font-bold text-gray-600">4.6</p>
              <span className="text-yellow-400">
                <FaStar />
              </span>
            </div>

            {/* Item 3*/}
            <p className="text-xs lg:text-sm">based on 1,000+ reviews</p>
          </div>
          <h1 className="max-w-220 mx-auto max-md:text-left">
            <span className="linearText max-md:text-left">AI-powered</span> analytics for teams
            that need answers now
          </h1>

          <p className="max-w-xl mx-auto max-md:text-left">
            Turn business performance data into clear answers your team can
            understand, explain, and act on – instantly.
          </p>

          {/* Cta*/}
          <div className="flex gap-4">
            <PrimaryButton link={"#"} brand={true}>
              Try It Free
            </PrimaryButton>
            <PrimaryButton link={"#"}>Book a Demo</PrimaryButton>
          </div>

          <p className="text-sm w-full max-md:text-left">No credit card needed · Free-forever plan</p>
        </header>

        {/* Interactive Feature Section */}
        <div
          className="relative w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Desktop & Tablet Layout (Image left, Features right floating) */}
          <div className="hidden md:block relative w-full h-[600px] lg:h-[700px] rounded-3xl overflow-visible pt-4">
            {/* Left Side: Images - SIGNIFICANTLY ENLARGED with more overlap */}
            <div className="absolute inset-0 right-[15%] lg:right-[20%] flex items-center justify-start p-4 lg:p-8 overflow-visible">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeFeature}
                  src={features[activeFeature].image}
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  alt={features[activeFeature].title}
                  loading="lazy"
                  className="w-[140%] h-auto max-h-[110%] object-contain object-left"
                  style={{
                    filter:
                      "drop-shadow(0 30px 40px rgba(0, 0, 0, 0.2)) drop-shadow(0 15px 20px rgba(0, 0, 0, 0.15))",
                  }}
                />
              </AnimatePresence>
            </div>

            {/* Right Side: Feature cards panel - SIGNIFICANT OVERLAP */}
            <div
              className="bg-white/95 backdrop-blur-md p-6 lg:p-8 md:p-5 rounded-2xl w-[340px] lg:w-[440px] absolute right-0 lg:right-10 md:right-2 top-1/2 -translate-y-1/2 z-20 border border-gray-100 flex flex-col items-center"
              style={{
                boxShadow: `
                  0 35px 60px rgba(0, 0, 0, 0.2),
                  0 25px 40px rgba(0, 0, 0, 0.15),
                  0 0 120px rgba(139, 92, 246, 0.25),
                  0 0 60px rgba(168, 85, 247, 0.18),
                  0 0 30px rgba(217, 70, 239, 0.12),
                  inset 0 1px 0 rgba(255, 255, 255, 0.6)
                `,
              }}
            >
              <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-6 text-center">
                Explore Key Features
              </h3>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {features.map((feature, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveFeature(idx)}
                    className={`group flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-300 cursor-pointer shadow-xm ${activeFeature === idx
                      ? "bg-purple-50 border-purple-200 shadow-md ring-1 ring-purple-400"
                      : "bg-white border-gray-100 hover:bg-gray-50"
                      }`}
                  >
                    <span
                      className={`text-2xl mb-2 transition-transform duration-300 ${activeFeature === idx
                        ? "scale-110 grayscale-0"
                        : "group-hover:scale-110 grayscale"
                        }`}
                    >
                      {feature.icon}
                    </span>
                    <span
                      className={`text-[11px] lg:text-xs font-semibold leading-tight text-center transition-colors duration-300 ${activeFeature === idx
                        ? "text-purple-600"
                        : "text-gray-500"
                        }`}
                    >
                      {feature.title}
                    </span>
                  </button>
                ))}
              </div>

              {/* Progress indicators */}
              <div className="flex justify-center gap-2 mb-6">
                {features.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveFeature(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${activeFeature === idx
                      ? "w-8 bg-purple-500"
                      : "w-1.5 bg-gray-300 hover:bg-gray-400"
                      }`}
                    aria-label={`Go to feature ${idx + 1}`}
                  />
                ))}
              </div>

              <PrimaryButton link={"#"} brand={true}>
                Try It Free
              </PrimaryButton>
            </div>
          </div>

          {/* Mobile Layout (Carousel) */}
          <div className="flex md:hidden flex-col gap-6 relative mt-10 w-full overflow-hidden">
            {/* Add styled scrollbar hiding */}
            <style>{`
              .hide-scroll::-webkit-scrollbar { display: none; }
              .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>

            {/* Image Container Top */}
            <div className="w-full h-[300px] sm:h-[400px] relative rounded-2xl bg-gray-50/50 flex items-center justify-center overflow-visible">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeFeature}
                  src={features[activeFeature].image}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  alt={features[activeFeature].title}
                  loading="lazy"
                  className="max-w-[95%] max-h-[95%] object-contain"
                  style={{
                    filter:
                      "drop-shadow(0 20px 30px rgba(0, 0, 0, 0.15)) drop-shadow(0 10px 12px rgba(0, 0, 0, 0.1))",
                  }}
                />
              </AnimatePresence>
            </div>

            {/* Active Info */}
            <div className="text-center px-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl mb-2">
                    {features[activeFeature].icon}
                  </div>
                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-brand">
                    {features[activeFeature].title}
                  </h3>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2">
              {features.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveFeature(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${activeFeature === idx
                    ? "w-6 bg-purple-500"
                    : "w-1.5 bg-gray-300"
                    }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Cards Slider Below Info */}
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-8 pt-4 px-6 md:px-4 -mx-4 hide-scroll relative">
              {features.map((feature, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveFeature(idx)}
                  className={`flex-shrink-0 snap-center w-[120px] h-[110px] flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-300 ${activeFeature === idx
                    ? "bg-purple-50 border-purple-300 shadow-md transform scale-105 z-10"
                    : "bg-white border-gray-100 opacity-70 hover:opacity-100"
                    }`}
                >
                  <span
                    className={`text-3xl mb-2 transition-all duration-300 ${activeFeature === idx ? "scale-110 grayscale-0" : "grayscale"}`}
                  >
                    {feature.icon}
                  </span>
                  <span
                    className={`text-[11px] font-semibold leading-tight text-center ${activeFeature === idx ? "text-purple-700" : "text-gray-500"}`}
                  >
                    {feature.title}
                  </span>
                </button>
              ))}
            </div>

            <div className="px-2 mt-2">
              <PrimaryButton link={"#"} brand={true}>
                Try It Free
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
