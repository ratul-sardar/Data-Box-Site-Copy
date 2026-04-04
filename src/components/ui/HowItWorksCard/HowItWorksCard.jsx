import ButtonSm from "../Button/ButtonSm";

export default function HowItWorksCard({ card }) {
  const {
    icon = "",
    title = "Connect",
    description = "Connect all your tools, so your data lives in one place, and not in silos.",
    features = [
      "130+ one-click integrations",
      "Google Sheets and Excel",
      "Databases",
    ],
    ctaText = "Explore Connect →",
    ctaLink = "#",
  } = card;

  return (
    <>
      <div
        className={`card rounded-3xl border border-gray-200/10 w-full shadow-sm text-purple-500`}
      >
        <div className="card-body gap-4 px-6 py-8">
          {/* Icon */}
          <div>{icon}</div>

          {/* Title */}
          <h3 className="card-title mt-2 text-2xl font-bold text-black">
            {title}
          </h3>

          {/* Description */}
          <p className="font-semibold text-base-content leading-snug">
            {description}
          </p>

          {/* List */}
          <ul className="text-base-content space-y-1 list-none">
            {features.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <div className="bg-purple-500 rounded-full w-1 h-1 "></div>
                {item}
              </li>
            ))}
          </ul>

          {/* Button */}
          <div className="card-actions mt-2">
            <ButtonSm ctaLink={ctaLink}>{ctaText}</ButtonSm>
          </div>
        </div>
      </div>
    </>
  );
}
