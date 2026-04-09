import React, { useState } from "react";
import { Warehouse, UserPlus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import PricingCard from "../../ui/PricingCard";
import { pricingData } from "../../../data/pricingData";
import logo1 from "../../../assets/pricing/logo1.svg";
import logo2 from "../../../assets/pricing/logo2.svg";
import logo3 from "../../../assets/pricing/logo3.svg";
import logo4 from "../../../assets/pricing/logo4.svg";
import logo5 from "../../../assets/pricing/logo5.svg";

const PricingHero = () => {
  const [activeTab, setActiveTab] = useState("businesses"); // 'businesses' or 'agencies'
  const [billingCycle, setBillingCycle] = useState("monthly"); // 'monthly' or 'annual'

  const currentPlans = pricingData[activeTab][billingCycle];

  const handleToggle = () => {
    setBillingCycle((prev) => (prev === "monthly" ? "annual" : "monthly"));
  };

  return (
    <>
      <section className="min-h-screen pt-32 pb-20 bg-linear-to-b from-[#7347ea] to-[#b253bd]">
        <div className="cssContainer">
          {/* Header */}
          <div className="header text-white mb-16 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
            >
              Free to start, built to scale
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white text-xl md:text-2xl max-w-3xl mx-auto opacity-90"
            >
              Start on a 14-day free trial of the Growth plan, then choose the
              plan that's right for you.
            </motion.p>
          </div>

          {/* Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            {/* Tabs */}
            <div className="flex p-1 bg-white/15 backdrop-blur-md gap-2.5 rounded-full border border-white/20">
              <button
                onClick={() => setActiveTab("businesses")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold max-md:text-[10px] max-md:px-2 max-md:py-1 transition-all duration-300 cursor-pointer ${activeTab === "businesses"
                  ? "bg-white text-[#7347ea] shadow-lg"
                  : "text-white hover:bg-white/10"
                  }`}
              >
                <Warehouse className="w-4 h-4" />
                Plans for Businesses
              </button>
              <button
                onClick={() => setActiveTab("agencies")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold max-md:text-[10px] transition-all duration-300 cursor-pointer ${activeTab === "agencies"
                  ? "bg-white text-[#7347ea] shadow-lg"
                  : "text-white hover:bg-white/10"
                  }`}
              >
                <UserPlus className="w-4 h-4" />
                Plans for Agencies
              </button>
            </div>

            {/* Toggle */}
            <div className="flex items-center gap-4">
              <span
                className={`text-sm font-bold transition-all ${billingCycle === "monthly" ? "text-white" : "text-white/60"}`}
              >
                Monthly
              </span>
              <div
                onClick={handleToggle}
                className="relative w-14 h-7 bg-white/25 rounded-full cursor-pointer p-1"
              >
                <motion.div
                  className="w-5 h-5 bg-white rounded-full shadow-md"
                  animate={{ x: billingCycle === "monthly" ? 0 : 28 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </div>
              <span
                className={`text-sm font-bold transition-all ${billingCycle === "annual" ? "text-white" : "text-white/60"}`}
              >
                Annual
              </span>
              <span className="bg-[#ffeb3b] text-black text-[10px] font-black px-2 py-1 rounded-full animate-pulse">
                SAVE 20%
              </span>
            </div>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 items-stretch">
            <AnimatePresence mode="popLayout">
              {currentPlans.map((plan) => (
                <PricingCard
                  key={`${activeTab}-${billingCycle}-${plan.name}`}
                  plan={plan}
                  billingCycle={billingCycle}
                  isPopular={plan.isPopular}
                  isBestValue={plan.isBestValue}
                />
              ))}
            </AnimatePresence>
          </div>

          <div className="pt-20">
            <p className="text-white/80 text-center text-xl font-bold mb-5">
              Trusted by more than 20,000 companies.
            </p>
            <div className="flex items-center justify-center flex-wrap gap-10">
              <img src={logo1} alt="logo1" />
              <img src={logo2} alt="logo2" />
              <img src={logo3} alt="logo3" />
              <img src={logo4} alt="logo4" />
              <img src={logo5} alt="logo5" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingHero;
