import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ButtonSm from "../../ui/Button/ButtonSm";
import { Briefcase, Presentation, Megaphone, Users } from "lucide-react";
import PrimaryButton from "../../ui/Button/PrimaryButton";

const cardData = [
  {
    id: 1,
    title: "Functional Leaders",
    color: "bg-[#E8EFFF]",
    textColor: "text-[#1E293B]",
    iconColor: "text-blue-600",
    icon: <Users size={50} />,
    description: "Align your business to the outcomes that matter.",
    details: [
      "Departmental tracking",
      "Resource allocation",
      "Team performance",
    ],
    ctaLink: "#",
  },
  {
    id: 2,
    title: "Executives",
    color: "bg-[#8B5CF6]",
    textColor: "text-white",
    iconColor: "text-white",
    icon: <Briefcase size={60} />,
    description: "Deliberately manage your business performance.",
    details: [
      "Align your business to the outcomes that matter with OKRs.",
      "Keep teams focused on what matters with shared goals and trusted data.",
      "Easily see your entire company's performance in one place.",
      "Get real-time updates and alerts on key metrics.",
    ],
    ctaLink: "#",
  },
  {
    id: 3,
    title: "Business Analysts",
    color: "bg-[#F3E8FF]",
    textColor: "text-[#1E293B]",
    iconColor: "text-purple-500",
    icon: <Presentation size={50} />,
    description: "Remove bottlenecks and empower your team.",
    details: [
      "Build dashboards faster",
      "Organize performance",
      "Real-time insights",
    ],
    ctaLink: "#",
  },
  {
    id: 4,
    title: "Agencies & Consultants",
    color: "bg-[#FFF2E2]",
    textColor: "text-[#1E293B]",
    iconColor: "text-orange-500",
    icon: <Megaphone size={50} />,
    description: "Scale your client reporting and insights.",
    details: ["Client reporting", "External access", "White-label solutions"],
    ctaLink: "#",
  },
];

const InteractiveCards = () => {
  const [activeId, setActiveId] = useState(2); // Executives open by default on desktop

  return (
    <section id="interactiveCards" className="">
      <div className="cssContainer">
        {/* Restored Original Heading Section */}
        <header className="header">
          <h2 className="max-w-200 mx-auto">
            <span className="linearText">Self-serve analytics </span>
            for people who are tired of doing reporting
          </h2>
        </header>

        {/* Updated Cards Grid */}
        <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[600px] mt-12">
          {cardData.map((card) => {
            const isActive = activeId === card.id;

            return (
              <motion.div
                key={card.id}
                layout
                onClick={() => setActiveId(card.id)}
                className={`relative cursor-pointer rounded-3xl p-6 md:p-10 overflow-hidden flex flex-col transition-all duration-500 ease-in-out ${
                  card.color
                } ${isActive ? "md:flex-[3]" : "md:flex-1"}`}
              >
                {/* Header: Title and Top-Right Icon */}
                <div className="flex justify-between items-start">
                  <h3
                    className={`text-xl md:text-2xl font-bold leading-tight max-w-[140px] ${card.textColor}`}
                  >
                    {card.title}
                  </h3>

                  {/* Icon: Visible on Mobile/Tab (always open),
                      but on Desktop only visible if isActive is true */}
                  <div
                    className={`transition-opacity duration-300 ${card.iconColor}
                    ${isActive ? "opacity-100 block" : "opacity-0 md:hidden"}
                    block`}
                  >
                    {card.icon}
                  </div>
                </div>

                {/* Content: Visible on Mobile/Tab, Conditional on Desktop */}
                <div
                  className={`mt-10 flex-1 ${isActive ? "block" : "hidden md:hidden"} md:block`}
                >
                  {/* Mobile View: Content always rendered */}
                  <div className="md:hidden">
                    <CardContent card={card} />
                  </div>

                  {/* Desktop View: Content animated via AnimatePresence */}
                  <div className="hidden md:block">
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.4 }}
                        >
                          <CardContent card={card} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Optional subtle icon for closed cards on desktop (Bottom) */}
                {!isActive && (
                  <div
                    className={`mt-auto hidden md:flex justify-center ${card.iconColor} `}
                  >
                    {card.icon}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Cta*/}
        <div className="flex justify-center mt-12">
          <PrimaryButton brand={true}>Try It Free</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

// Reusable content component to keep the main map clean
const CardContent = ({ card }) => (
  <>
    <p
      className={`text-lg md:text-xl font-bold mb-6 ${card.textColor} leading-snug`}
    >
      {card.description}
    </p>
    <ul className={`space-y-4 ${card.textColor}`}>
      {card.details.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-current shrink-0 opacity-60" />
          <span className="text-sm md:text-base font-medium opacity-90 leading-relaxed">
            {item}
          </span>
        </li>
      ))}
    </ul>
    <div className="mt-10">
      <ButtonSm ctaLink={card.ctaLink} className="w-fit">
        Learn More →
      </ButtonSm>
    </div>
  </>
);

export default InteractiveCards;
