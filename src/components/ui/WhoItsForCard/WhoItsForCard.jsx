import { ChartLine } from "lucide-react";
import ButtonSm from "../Button/ButtonSm";
import WhoItsForCardMobile from "./WhoItsForCardMobile";

export default function WhoItsForCard({ card }) {
  const {
    image = "",
    title = "Business Analysts",
    body = "Build dashboards and reports much faster than with enterprise solutions",
    features = [
      "Build dashboards and reports much faster than with enterprise solutions",
      "Remove yourself as the bottleneck and empower your team to get the answers they need",
      "Organize your company’s performance by team",
    ],
    ctaLink = "#",
    color = "purple",
  } = card;
  return (
    <div className="">
      {/* Desktop*/}
      <div className="hidden xl:block bg-base-300 cursor-pointer p-8 rounded-2xl shadow-sm h-auto">
        <div className="flex flex-col justify-between h-full gap-8">
          <h3 className="text-[18px] font-bold break-words">{title}</h3>
          <div className="flex justify-center">
            <ChartLine size={80} className="text-purple-600/80" />
          </div>
        </div>
      </div>

      {/* Tablet*/}
      <div className="hidden md:block xl:hidden bg-red-300/20 border border-red-200 cursor-pointer p-8 rounded-2xl shadow-sm h-auto">
        <div className="flex flex-col h-full">
          {/* Title*/}
          <div className="flex justify-between items-start mb-6 gap-4">
            <h3 className="text-[18px] font-bold break-words">{title}</h3>
            <ChartLine size={48} className="shrink-0 text-red-600/80" />
          </div>

          {/* description*/}
          <div className="">
            <p className=" mb-4 font-semibold text-black/70">{body}</p>
            <ul className="space-y-3">
              {features.map((item, index) => (
                <li key={index} className="flex gap-1 items-center">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Cta*/}
          <div className="mt-4 w-fit">
            <ButtonSm ctaLink={ctaLink}>Explore</ButtonSm>
          </div>
        </div>
      </div>

      {/* Mobile*/}

      <WhoItsForCardMobile></WhoItsForCardMobile>
    </div>
  );
}
