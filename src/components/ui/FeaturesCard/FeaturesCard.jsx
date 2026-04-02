import { useState } from "react";

export default function FeaturesCard({ cardContents }) {
  const [overlay, setOverlay] = useState(false);

  const {
    icon,
    title = "Card Title",
    descriptoin = `A card component has a figure, a body part, and inside body there
      are title and actions parts`,
    hoverText = `Databox is an absolute must in my tech stack. It allows me to
      track metrics that matter to me in a way that other reporting
      tools don't.`,
  } = cardContents;

  function handleMouseIn() {
    setOverlay(true);
    console.log("mouse just got in");
  }

  function handleMouseOut() {
    setOverlay(false);
    console.log("mouse just got out");
  }

  return (
    <>
      <div
        onMouseEnter={handleMouseIn}
        onMouseOut={handleMouseOut}
        className={`relative card bg-base-100 w-full card-lg shadow-sm z-10 overflow-hidden`}
      >
        {/* Overlay*/}
        {overlay && (
          <div
            onMouseEnter={handleMouseIn}
            onMouseOut={handleMouseOut}
            className="absolute w-full h-full bg-main-linear p-8 z-20"
          >
            <p className="text-5xl mb-3 text-white">"</p>
            <p className="text-white text-[18px] ">{hoverText}</p>
          </div>
        )}

        <div className="card-body gap-0">
          <span className="inline-block text-5xl mb-6">{`${icon}`}</span>

          <h2 className="card-title mb-4">{title}</h2>
          <p>{descriptoin}</p>
        </div>
      </div>
    </>
  );
}
