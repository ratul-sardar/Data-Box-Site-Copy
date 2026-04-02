import PrimaryButton from "../../ui/Button/PrimaryButton";
import HowItWorksCard from "../../ui/HowItWorksCard/HowItWorksCard";

const cardInfo = [
  {
    icon: "",
    title: "Connect",
    description:
      "Connect all your tools, so your data lives in one place, and not in silos.",
    features: [
      "130+ one-click integrations",
      "Google Sheets and Excel",
      "Databases",
    ],
    ctaLink: "#",
    color: "purple",
  },
  {
    icon: "",
    title: "Prepare",
    description:
      "Clean, standardize, and merge raw data for deeper data analysis.",
    features: [
      "Data Preparation (Datasets)",
      "Filters & Calculations",
      "Merge Datasets",
    ],
    ctaLink: "#",
    color: "red",
  },

  {
    icon: "",
    title: "Connect",
    description:
      "Connect all your tools, so your data lives in one place, and not in silos.",
    features: [
      "130+ one-click integrations",
      "Google Sheets and Excel",
      "Databases",
    ],
    ctaLink: "#",
    color: "purple",
  },

  {
    icon: "",
    title: "Connect",
    description:
      "Connect all your tools, so your data lives in one place, and not in silos.",
    features: [
      "130+ one-click integrations",
      "Google Sheets and Excel",
      "Databases",
    ],
    ctaLink: "#",
    color: "purple",
  },

  {
    icon: "",
    title: "Connect",
    description:
      "Connect all your tools, so your data lives in one place, and not in silos.",
    features: [
      "130+ one-click integrations",
      "Google Sheets and Excel",
      "Databases",
    ],
    ctaLink: "#",
    color: "purple",
  },

  {
    icon: "",
    title: "Connect",
    description:
      "Connect all your tools, so your data lives in one place, and not in silos.",
    features: [
      "130+ one-click integrations",
      "Google Sheets and Excel",
      "Databases",
    ],
    ctaLink: "#",
    color: "purple",
  },
];

export default function HowItWorks() {
  return (
    <>
      <section className="bg-blue">
        <div className="cssContainer ">
          <header className="header">
            <h2 className="max-w-200 mx-auto ">
              <span className="linearText">Your</span> easier, no-code data
              workflow
            </h2>
            <p className="max-w-175 mx-auto ">
              Databox simplifies every step, so your team can focus on improving
              performance – not process.
            </p>
          </header>
          {/* Cards*/}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardInfo.map((card, index) => {
              return <HowItWorksCard key={index} card={card}></HowItWorksCard>;
            })}
          </div>
          <div className="flex items-center justify-center mt-12">
            <PrimaryButton brand={true} link={"#"}>
              Explore the platform
            </PrimaryButton>
          </div>
        </div>
      </section>
    </>
  );
}
