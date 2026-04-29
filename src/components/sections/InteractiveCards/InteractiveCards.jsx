import React, { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ButtonSm from "../../ui/Button/ButtonSm";
import PrimaryButton from "../../ui/Button/PrimaryButton";
import * as LucideIcons from "lucide-react";

function InteractiveCards({ interactiveCardsData }) {
  const [activeId, setActiveId] = useState(0);

  if (!interactiveCardsData) return null;

  const cards = interactiveCardsData?.cards || [];

  // Helper to extract color value from Tailwind arbitrary class (e.g., "bg-[#E8EFFF]" -> "#E8EFFF")
  // or return the string as is if it's a CSS color
  const getStyleColor = (str, prefix) => {
    if (!str) return null;
    // Check for Tailwind arbitrary value format: bg-[#...], text-[#...], etc.
    const arbitraryMatch = str.match(new RegExp(`${prefix}-\\[(.*?)\\]`));
    if (arbitraryMatch) return arbitraryMatch[1];
    
    // Check if it's already a CSS color
    if (str.startsWith('#') || str.startsWith('rgb') || str.startsWith('hsl')) return str;
    
    return null;
  };

  return (
    <section id="interactiveCards" className="py-16">
      <div className="cssContainer">
        <header className="header">
          <h2 className="w-full max-w-200 mx-auto">
            {interactiveCardsData?.heading?.split(interactiveCardsData?.highlightedText)[0]}
            <span className="w-full break-words linearText">
              {interactiveCardsData?.highlightedText}
            </span>
            {interactiveCardsData?.heading?.split(interactiveCardsData?.highlightedText)[1]}
          </h2>
        </header>

        <div className="flex flex-col md:flex-row gap-4 min-h-150 h-auto mt-12">
          {cards.map((card, idx) => {
            const isActive = activeId === idx;
            // Trim icon name to handle cases like "Users "
            const iconName = card.icon?.trim();
            const Icon = LucideIcons[iconName] || LucideIcons.Users;

            const bgColor = getStyleColor(card.color, 'bg');
            const textColor = getStyleColor(card.textColor, 'text');
            const iconColor = getStyleColor(card.iconColor, 'text');

            return (
              <motion.div
                key={idx}
                layout
                onClick={() => setActiveId(idx)}
                style={{ backgroundColor: bgColor }}
                className={`relative cursor-pointer rounded-3xl p-6 md:p-10 overflow-hidden flex flex-col transition-all duration-500 ease-in-out ${
                  !bgColor ? (card.color || 'bg-gray-100') : ''
                } ${isActive ? "md:flex-[3]" : "md:flex-1"}`}
              >
                <div className="flex justify-between items-start gap-4">
                  <h3
                    style={{ color: textColor }}
                    className={`text-xl md:text-2xl font-bold leading-tight break-words ${
                      !textColor ? (card.textColor || 'text-gray-900') : ''
                    }`}
                  >
                    {card.title}
                  </h3>

                  <div
                    style={{ color: iconColor }}
                    className={`transition-opacity duration-300 ${
                      !iconColor ? (card.iconColor || 'text-gray-600') : ''
                    }
                    ${isActive ? "opacity-100 block" : "opacity-0 md:hidden"}
                    block`}
                  >
                    <Icon size={50} />
                  </div>
                </div>

                <div
                  className={`mt-10 flex-1 ${isActive ? "block" : "hidden md:hidden"} md:block`}
                >
                  <div className="md:hidden">
                    <CardContent card={card} textColor={card.textColor} />
                  </div>

                  <div className="hidden md:block">
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.4 }}
                        >
                          <CardContent card={card} textColor={card.textColor} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {!isActive && (
                  <div
                    style={{ color: iconColor }}
                    className={`mt-auto hidden md:flex justify-center ${
                      !iconColor ? (card.iconColor || 'text-gray-400') : ''
                    } `}
                  >
                    <Icon size={isActive ? 50 : 30} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <PrimaryButton brand={true}>
            {interactiveCardsData?.ctaText || "Try It Free"}
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

const CardContent = ({ card, textColor: textColorProp }) => {
  // Helper to extract color value from Tailwind arbitrary class
  const getStyleColor = (str, prefix) => {
    if (!str) return null;
    const arbitraryMatch = str.match(new RegExp(`${prefix}-\\[(.*?)\\]`));
    if (arbitraryMatch) return arbitraryMatch[1];
    if (str.startsWith('#') || str.startsWith('rgb') || str.startsWith('hsl')) return str;
    return null;
  };

  const textColorValue = getStyleColor(textColorProp, 'text');

  return (
    <>
      <p
        style={{ color: textColorValue }}
        className={`text-lg md:text-xl font-bold mb-6 ${!textColorValue ? (textColorProp || 'text-gray-900') : ''} leading-snug`}
      >
        {card.description}
      </p>
      <ul 
        style={{ color: textColorValue }}
        className={`space-y-4 ${!textColorValue ? (textColorProp || 'text-gray-700') : ''}`}
      >
        {card.details?.map((item, idx) => (
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
};

export default memo(InteractiveCards);
