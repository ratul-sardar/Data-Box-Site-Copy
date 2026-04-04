import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ButtonSm from "../../ui/Button/ButtonSm";
import {
  Briefcase,
  ChartColumnIncreasing,
  Megaphone,
  Users,
  UserStar,
} from "lucide-react";

const cardData = [
  {
    id: 1,
    title: "Business Analysts",
    color: "bg-purple-500",
    textColor: "text-white",
    icon: <ChartColumnIncreasing size={80} />,
    details: [
      "Build dashboards and reports much faster than with enterprise solutions",
      "Remove yourself as the bottleneck and empower your team",
      "Organize your company's performance by team",
    ],
    ctaLink: "#",
  },
  {
    id: 2,
    title: "Executives",
    color: "bg-gray-200",
    textColor: "text-gray-800",
    icon: <Briefcase size={80} />,
    details: ["High-level overview", "Strategic planning", "Real-time KPIs"],
    ctaLink: "#",
  },
  {
    id: 3,
    title: "Functional Leaders",
    color: "bg-blue-100",
    textColor: "text-blue-800",
    icon: <UserStar size={80} />,
    details: [
      "Departmental tracking",
      "Resource allocation",
      "Team performance",
    ],
    ctaLink: "#",
  },
  {
    id: 4,
    title: "Team Contributors",
    color: "bg-green-100",
    textColor: "text-green-800",
    icon: <Users size={80} />,
    details: ["Task management", "Individual metrics", "Collaboration tools"],
    ctaLink: "#",
  },
  {
    id: 5,
    title: "Agencies & Consultants",
    color: "bg-orange-100",
    textColor: "text-orange-800",
    icon: <Megaphone size={80} />,
    details: ["Client reporting", "External access", "White-label solutions"],
    ctaLink: "#",
  },
];

const InteractiveCards = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <>
      <section id="whoItsFor" className="">
        <div className="cssContainer">
          <header className="header">
            <h2 className="max-w-200 mx-auto ">
              <span className="linearText">Self-serve analytics </span>
              for people who are tired of doing reporting
            </h2>
          </header>

          {/* Cards*/}

          <div className="w-full bg-white p-4 md:p-8 font-sans">
            <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[500px]">
              {cardData.map((card) => {
                const isActive = activeId === card.id;

                return (
                  <motion.div
                    key={card.id}
                    layout
                    whileHover={{ scale: 1.02 }}
                    transition={{
                      layout: { duration: 0.4, ease: "easeInOut" },
                    }}
                    onClick={() => setActiveId(card.id)}
                    className={`relative cursor-pointer rounded-2xl p-6 overflow-hidden flex flex-col transition-all duration-500 ease-in-out ${
                      card.color
                    } ${isActive ? "md:flex-[3]" : "flex-1"}`}
                  >
                    {/* Title */}
                    <h3
                      className={`text-lg md:text-xl font-bold mb-4 ${card.textColor}`}
                    >
                      {card.title}
                    </h3>

                    {/* Content */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="mt-2 md:mt-4"
                        >
                          <p
                            className={`mb-3 md:mb-4 text-sm md:text-base font-semibold ${card.textColor} opacity-90`}
                          >
                            Remove bottlenecks, ensure accuracy, and build
                            faster.
                          </p>

                          <ul
                            className={`space-y-2 md:space-y-3 ${card.textColor}`}
                          >
                            {card.details.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-xs md:text-sm opacity-90"
                              >
                                <span className="mt-1">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>

                          <ButtonSm
                            ctaLink={card.ctaLink}
                            className={"w-fit mt-6"}
                          >
                            Learn More →
                          </ButtonSm>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Icon */}
                    <div
                      className={`mt-auto flex ${
                        isActive ? "justify-end" : "justify-center"
                      }`}
                    >
                      <span className="text-4xl md:text-6xl grayscale brightness-50 opacity-40">
                        {card.icon}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InteractiveCards;
