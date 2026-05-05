import { MoveUp, TrendingUp, TrendingDown } from "lucide-react";
const iconMap = {
  TrendingUp,
  TrendingDown,
};

import ButtonSm from "../../../ui/Button/ButtonSm";

export default function Info({ infoData }) {
  if (!infoData) return null;

  return (
    <>
      <section id="info" className="">
        <div className="cssContainer pt-0">
          <header className="header">
            <h2 className="max-w-175">
              <span className="linearText">{infoData?.colorIntroHeading}</span>
              <br />
              {infoData?.introHeadingSecoundPart}
            </h2>
          </header>

          {/* Cards*/}
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
            {infoData?.cards?.map((card, index) => {
              const IconComponent = iconMap[card.icon];

              return (
                <div
                  key={index}
                  className="bg-[#eef0f8] rounded-3xl p-8 w-full max-w-sm shadow-sm"
                >
                  {/* Stat */}
                  <div className="flex items-center gap-2 mb-1">
                    {IconComponent && (
                      <IconComponent
                        size={32}
                        strokeWidth={2.5}
                        className="text-violet-500 shrink-0"
                      />
                    )}
                    <span className="text-5xl font-black text-violet-500 leading-none">
                      {card?.title}
                    </span>
                  </div>

                  {/* Label */}
                  <p className="text-gray-700 font-semibold text-sm mt-2 mb-6">
                    {card?.description}
                  </p>

                  {/* Bottom row */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
                    <div className="flex-1 min-w-[160px]">
                      <ButtonSm className="w-full sm:w-fit cursor-pointer">
                        Read case study →
                      </ButtonSm>
                    </div>
                    <div className="shrink-0">
                      <img
                        src={card?.logo}
                        alt="business logo"
                        className="max-h-8 object-contain"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
