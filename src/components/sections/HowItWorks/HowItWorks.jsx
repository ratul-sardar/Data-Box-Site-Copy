import PrimaryButton from "../../ui/Button/PrimaryButton";
import HowItWorksCard from "../../ui/HowItWorksCard/HowItWorksCard";
import HowItWorksBg from "../../../assets/data-workflow.png";

export default function HowItWorks({ howItWorksData }) {
  if (!howItWorksData) return null;

  const {
    headingFirstPart,
    headingHighlight,
    subHeading,
    cards = [],
    bottomCTA,
  } = howItWorksData;

  return (
    <>
      <section
        id="howItWorks"
        className=""
        style={{
          backgroundImage: `url(${HowItWorksBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="cssContainer ">
          <header className="header text-center">
            <h2 className="max-w-200 mx-auto ">
              <span className="linearText">{headingFirstPart}</span>{" "}
              {headingHighlight}
            </h2>
            <p className="max-w-175 mx-auto whitespace-pre-line leading-relaxed">
              {subHeading}
            </p>
          </header>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card) => (
              <HowItWorksCard key={card._key} card={card} />
            ))}
          </div>

          {bottomCTA && (
            <div className="flex items-center justify-center mt-12">
              <PrimaryButton brand={true} link={bottomCTA.link || "#"}>
                {bottomCTA.buttonText}
              </PrimaryButton>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
