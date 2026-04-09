import { useState } from "react";

export default function FeaturesCard({ card }) {
  const [overlay, setOverlay] = useState(false);

  const {
    icon = "null",
    title = "Card Title",
    descriptoin = `A card component has a figure, a body part, and inside body there
      are title and actions parts`,
    hoverText = `Databox is an absolute must in my tech stack. It allows me to
      track metrics that matter to me in a way that other reporting
      tools don't.`,
  } = card;

  function handleMouseIn() {
    setOverlay(true);
    console.log("mouse just got in");
  }

  function handleMouseLeave() {
    setOverlay(false);
    console.log("mouse just got out");
  }

  return (
    <>
      <div
        onMouseEnter={handleMouseIn}
        onMouseLeave={handleMouseLeave}
        className={`relative card bg-base-200/65 w-full card-lg shadow-md rounded-2xl z-10 overflow-hidden`}
      >
        {/* Overlay*/}

        <div
          className={`absolute w-full h-full bg-main-linear p-8 z-20 transition-opacity duration-200 ease-in
            ${overlay ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <p className="text-5xl mb-3 text-white">"</p>
          <p className="text-white text-[18px] ">{hoverText}</p>
        </div>

        <div className="card-body gap-0">
          <span className="inline-block text-5xl mb-6 text-[#9061f9]">
            {icon}
          </span>

          <h2 className="card-title mb-4">{title}</h2>
          <p>{descriptoin}</p>
        </div>
      </div>
    </>
  );
}
