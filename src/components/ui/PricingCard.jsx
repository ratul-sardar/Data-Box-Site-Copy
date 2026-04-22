import React from "react";
import { Check, Sparkles, Infinity as InfinityIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const PricingCard = ({ plan, billingCycle, isPopular, isBestValue }) => {
  const {
    name,
    description,
    price,
    dataSources,
    additionalPrice,
    cta,
    ctaSecondary,
    ctaType,
    featuresTitle,
    features,
    footerTitle,
    footerText,
  } = plan;

  const renderIcon = (iconName) => {
    switch (iconName) {
      case "check":
        return <Check className="w-4 h-4 text-green-500" />;
      case "sparkles":
        return <Sparkles className="w-4 h-4 text-purple-500" />;
      case "infinity":
        return <InfinityIcon className="w-4 h-4 text-blue-500" />;
      default:
        return null;
    }
  };

  const ctaClasses = {
    primary:
      "bg-[#4d71f1] text-white hover:bg-[#405ed1] border-none shadow-lg shadow-blue-200",
    "primary-orange":
      "bg-[#ff8a00] text-white hover:bg-[#e67c00] border-none shadow-lg shadow-orange-200",
    "primary-dark":
      "bg-[#2a2d3e] text-white hover:bg-[#1f212e] border-none shadow-lg shadow-slate-200",
    outline:
      "border-2 border-[#22c55e] text-[#22c55e] hover:bg-green-50 shadow-sm",
    "outline-purple":
      "border-2 border-[#7c3aed] text-[#7c3aed] hover:bg-purple-50 shadow-sm",
  };

  return (
    <motion.div
      layout
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`relative flex flex-col p-6 sm:p-4 bg-white rounded-2xl shadow-2xl transition-all duration-300 flex-1 w-full ${
        isPopular ? "border-[3px] border-[#a855f7] scale-[1.02]" : ""
      }`}
    >
      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        {isPopular && (
          <span className="px-3 py-1 text-[10px] font-black text-white bg-[#a855f7] rounded-md uppercase tracking-wide">
            Most popular
          </span>
        )}
        {isBestValue && (
          <span className="px-3 py-1 text-[10px] font-black text-white bg-[#7c3aed] rounded-md uppercase tracking-wide">
            Best value
          </span>
        )}
      </div>

      {/* Header */}
      <div className="mb-6 grow-0">
        <h3
          className={`text-2xl font-extrabold mb-3 break-words ${
            name === "Free"
              ? "text-[#22c55e]"
              : name === "Pro" || name.includes("Starter")
                ? "text-[#3b82f6]"
                : name === "Growth" || name.includes("Growth")
                  ? "text-[#1e293b]"
                  : "text-[#1e293b]"
          }`}
        >
          {name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed font-medium break-words">
          {description}
        </p>
      </div>

      {/* Pricing */}
      <div className="mb-8">
        <div className="flex items-start flex-wrap">
          <span className="text-2xl font-bold mt-2 mr-1">$</span>
          <div className="flex items-baseline flex-wrap">
            <AnimatePresence mode="wait">
              <motion.span
                key={price}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-4xl sm:text-5xl font-normal tracking-tighter"
              >
                {price}
              </motion.span>
            </AnimatePresence>
            <div className="ml-2 flex flex-col">
              <span className="text-gray-500 text-xs sm:text-sm font-semibold">
                /month
              </span>
              <span className="text-gray-400 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
                billed {billingCycle}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="font-bold text-[#22c55e] text-lg break-words">
            {dataSources}
          </p>
          {additionalPrice && (
            <p className="text-gray-600 text-sm mt-1 font-bold break-words">
              {additionalPrice}
            </p>
          )}
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-col gap-2 mb-8">
        <button
          className={`w-full py-2.5 px-4 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer whitespace-normal break-words min-h-[44px] ${ctaClasses[ctaType] || ctaClasses.primary}`}
        >
          {cta}
        </button>
        {ctaSecondary && (
          <button className="w-full py-2 px-4 border-2 border-transparent text-blue-600 text-sm font-bold hover:text-blue-700 transition-all duration-200 cursor-pointer whitespace-normal break-words min-h-[44px]">
            {ctaSecondary}
          </button>
        )}
      </div>

      {/* Features */}
      <div className="grow">
        <p className="text-sm font-bold text-gray-700 mb-4">{featuresTitle}</p>
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 group">
              <div className="mt-1 shrink-0">
                {feature.isValue ? (
                  <span className="font-bold text-green-600 w-4 block text-center leading-none">
                    {feature.value}
                  </span>
                ) : (
                  renderIcon(feature.icon)
                )}
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-sm ${feature.highlight ? "font-bold text-[#ff8a00]" : "text-gray-600"}`}
                >
                  {feature.text}
                </span>
                {feature.badge && (
                  <span className="px-1.5 py-0.5 text-[10px] font-bold text-white bg-green-500 rounded uppercase tracking-wider">
                    {feature.badge}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer info */}
      {(footerTitle || footerText) && (
        <div className="mt-8 pt-6 border-t border-gray-100">
          {footerTitle && (
            <p className="text-xs font-bold text-gray-500 mb-2">
              {footerTitle}
            </p>
          )}
          <div className="flex items-start gap-2">
            {!footerTitle && (
              <span className="text-gray-400 text-xs mt-1">i</span>
            )}
            <p className="text-[11px] text-gray-500 leading-normal italic">
              {footerText}
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default PricingCard;
