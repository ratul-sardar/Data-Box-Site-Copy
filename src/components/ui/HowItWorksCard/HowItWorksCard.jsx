import ButtonSm from "../Button/ButtonSm";
import {
  PlugZap,
  Blocks,
  ScanEye,
  ScanSearch,
  Workflow,
  Waypoints,
} from "lucide-react";

// icon mapping (Sanity string → real icon)
const iconMap = {
  PlugZap: PlugZap,
  Blocks: Blocks,
  ScanEye: ScanEye,
  ScanSearch: ScanSearch,
  Workflow: Workflow,
  Waypoints: Waypoints,
};

export default function HowItWorksCard({ card }) {
  const {
    title,
    description,
    features,
    ctaText,
    ctaLink,
    icon,
  } = card;

  const IconComponent = iconMap[icon];

  return (
    <div className="card min-w-0 rounded-3xl bg-base-100/65 border border-gray-200/10 w-full shadow-sm text-purple-500">
      <div className="card-body gap-4 px-6 py-8">

        {/* Icon */}
        <div className="shrink-0">
          {IconComponent && <IconComponent size={92} />}
        </div>

        {/* Title */}
        <h3 className="card-title mt-2 text-xl sm:text-2xl font-bold text-black break-words leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="font-semibold text-base-content leading-snug break-words">
          {description}
        </p>

        {/* Features */}
        <ul className="text-base-content space-y-2 list-none">
          {features?.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="bg-purple-500 rounded-full w-1.5 h-1.5 mt-2 shrink-0"></div>
              <span className="text-sm sm:text-base leading-tight break-words">
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="card-actions mt-4">
          <ButtonSm ctaLink={ctaLink}>
            {ctaText}
          </ButtonSm>
        </div>
      </div>
    </div>
  );
}
