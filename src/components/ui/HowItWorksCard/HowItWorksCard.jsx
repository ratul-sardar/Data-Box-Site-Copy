import ButtonSm from "../Button/ButtonSm";

export default function HowItWorksCard({ card }) {
  const {
    // icon = "",
    title = "Connect",
    description = "Connect all your tools, so your data lives in one place, and not in silos.",
    features = [
      "130+ one-click integrations",
      "Google Sheets and Excel",
      "Databases",
    ],
    ctaText = "Explore Connect →",
    ctaLink = "#",
    color = "",
  } = card;

  return (
    <>
      <div
        className={`card rounded-3xl border border-gray-200/10 w-full shadow-sm bg-${color}-500/10`}
      >
        <div className="card-body gap-4 px-6 py-8">
          {/* Icon */}
          <div>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 8l6 6-3 3-2-2-8 8 2 2-3 3-6-6 3-3 2 2 8-8-2-2 3-3z"
                stroke="#7c3aed"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <circle cx="26" cy="10" r="2" fill="#7c3aed" />
              <circle cx="10" cy="26" r="2" fill="#7c3aed" />
            </svg>
          </div>

          {/* Title */}
          <h3 className="card-title mt-2 text-2xl font-bold text-purple-500">
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
