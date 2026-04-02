import { MoveUp, TrendingUp, TrendingDown } from "lucide-react";
import ButtonSm from "../../../ui/Button/ButtonSm";

const cardInfo = [
  {
    title: "55%",
    description: "increase in sales YoY",
    ctaLink: "#",
    logoLink:
      "https://cdnwebsite.databox.com/wp-content/uploads/2024/01/25053353/First_Response_logo-1.png",
    icon: TrendingUp,
  },

  {
    title: "50%",
    description: "decrease in overall reporting costs",
    ctaLink: "#",
    logoLink:
      "https://cdnwebsite.databox.com/wp-content/uploads/2024/03/27030250/market_launcher_logo-1.png",
    icon: TrendingDown,
  },
  {
    title: "60%",
    description: "reduction in time spent creating reports",
    ctaLink: "#",
    logoLink:
      "https://cdnwebsite.databox.com/wp-content/uploads/2025/08/06082859/hero-factory-logo.png",
    icon: TrendingDown,
  },
];

export default function Info() {
  return (
    <>
      <section className="">
        <div className="cssContainer">
          <header className="header">
            <h2 className="max-w-175">
              <span className="linearText">
                20,000+ scaling teams & agencies
              </span>
              <br />
              drive results that matter
            </h2>
          </header>

          {/* Cards*/}
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
            {cardInfo.map((card, index) => {
              let Icon = card.icon;

              return (
                <div
                  key={index}
                  className="bg-[#eef0f8] rounded-3xl p-8 w-full max-w-sm shadow-sm"
                >
                  {/* Stat */}
                  <div className="flex items-center gap-2 mb-1">
                    <Icon
                      size={32}
                      strokeWidth={2.5}
                      className="text-violet-500 shrink-0"
                    />
                    <span className="text-5xl font-black text-violet-500 leading-none">
                      {card.title}
                    </span>
                  </div>

                  {/* Label */}
                  <p className="text-gray-700 font-semibold text-sm mt-2 mb-6">
                    {card.description}
                  </p>

                  {/* Bottom row */}
                  <div className="flex items-center gap-4">
                    <ButtonSm ctaLink={card.ctaLink}>
                      Read case study →
                    </ButtonSm>
                    <div className="ml-auto">
                      <img
                        src={card.logoLink}
                        alt="business logo"
                        className="max-h-8 "
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
