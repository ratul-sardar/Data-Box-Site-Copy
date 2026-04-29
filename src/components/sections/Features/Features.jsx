import React, { memo } from "react";
import PrimaryButton from "../../ui/Button/PrimaryButton";
import backgroundImage from "../../../assets/background-desktop.svg";
import FeaturesCard from "../../ui/FeaturesCard/FeaturesCard";
import * as LucideIcons from "lucide-react";
import { LuNetwork } from "react-icons/lu";

// Fallback data
const fallbackCards = [
  {
    icon: "LuNetwork",
    title: "Card Title",
    description: "A card component has a figure, a body part, and inside body there are title and actions parts",
    hoverText: "Databox is an absolute must in my tech stack. It allows me to track metrics that matter to me in a way that other reporting tools don't.",
  }
];

function Features({ featuresData }) {
  if (!featuresData) return null;

  const cards = featuresData?.cards?.length > 0 
    ? featuresData.cards.map(card => ({
        ...card,
        // Map icon string to component if it exists in lucide-react or fallback to LuNetwork
        icon: LucideIcons[card.icon] ? React.createElement(LucideIcons[card.icon]) : <LuNetwork />
      }))
    : fallbackCards.map(card => ({
        ...card,
        icon: <LuNetwork />
      }));

  return (
    <section
      id="Features"
      className={`bg-cover bg-center`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="cssContainer">
        <header className="header">
          <h2 className="max-w-200 mx-auto">
            {featuresData?.heading?.split(featuresData?.highlightedText)[0]}
            <span className="linearText">{featuresData?.highlightedText}</span>
            {featuresData?.heading?.split(featuresData?.highlightedText)[1]}
          </h2>
          <p className="max-w-175 mx-auto">
            {featuresData?.subheading}
          </p>
        </header>

        {/* Cards*/}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <FeaturesCard key={index} card={card}></FeaturesCard>
          ))}
        </div>

        {/* Cta*/}
        <div className="flex items-center justify-center mt-12">
          <PrimaryButton brand={true} link={featuresData?.ctaLink || "#"}>
            {featuresData?.ctaText || "Why choose Databox"}
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

export default memo(Features);
