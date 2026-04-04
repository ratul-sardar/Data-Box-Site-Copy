import {
  Blocks,
  PlugZap,
  Route,
  ScanEye,
  ScanSearch,
  Waypoints,
  Workflow,
} from "lucide-react";
import PrimaryButton from "../../ui/Button/PrimaryButton";
import HowItWorksCard from "../../ui/HowItWorksCard/HowItWorksCard";

const cardInfo = [
  {
    icon: <PlugZap size={92} />,
    title: "Connect",
    description:
      "Connect all your tools, so your data lives in one place, and not in silos.",
    features: [
      "130+ one-click integrations",
      "Google Sheets and Excel",
      "Databases",
    ],
    ctaText: "Explore Connect →",
    ctaLink: "#",
  },
  {
    icon: <Blocks size={92} />,
    title: "Prepare",
    description:
      "Clean, standardize, and merge raw data for deeper data analysis.",
    features: [
      "Data Preparation (Datasets)",
      "Filters & Calculations",
      "Merge Datasets",
    ],
    ctaText: "Explore Prepare →",
    ctaLink: "#",
  },
  {
    icon: <ScanEye size={92} />,
    title: "Visualize",
    description:
      "Easily build beautiful dashboards with clear data visualizations.",
    features: [
      "Drag-and-drop designer",
      "20+ visualization types",
      "200+ pre-built templates",
      "TV and mobile views",
    ],
    ctaLink: "#",
    ctaText: "Explore Visualize →",
  },
  {
    icon: <ScanSearch size={92} />,
    title: "Analyze",
    description: "Understand how your business is performing.",
    features: [
      "Drill-down to row-level data",
      "Compare periods",
      "Filter by dimension",
      "Get AI-powered insights and summaries",
    ],
    ctaLink: "#",
    ctaText: "Explore Analyze →",
  },
  {
    icon: <Workflow size={92} />,
    title: "Report & Automate",
    description:
      "Automatically share data with your team, in the format you prefer.",
    features: [
      "Page and Slide reports",
      "Performance updates sent to Slack, email, or mobile",
      "Share links",
    ],
    ctaLink: "#",
    ctaText: "Explore Report & Automate →",
  },
  {
    icon: <Waypoints size={92} />,
    title: "Plan",
    description:
      "Use your data to make better decisions and set better targets.",
    features: ["Set and track goals", "Forecast future results"],
    ctaLink: "#",
    ctaText: "Explore Connect →",
  },
];

export default function HowItWorks() {
  return (
    <>
      <section id="howItWorks" className="">
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
