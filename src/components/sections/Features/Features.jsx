import PrimaryButton from "../../ui/Button/PrimaryButton";
import backgroundImage from "../../../assets/background-desktop.svg";
import FeaturesCard from "../../ui/FeaturesCard/FeaturesCard";
import { LuNetwork } from "react-icons/lu";

//<LuNetwork />

// Card Contents
const cardContents = [
  {
    icon: <LuNetwork />,
    title: "Card Title",
    descriptoin: `A card component has a figure, a body part, and inside body there
    are title and actions parts`,
    hoverText: `Databox is an absolute must in my tech stack. It allows me to
    track metrics that matter to me in a way that other reporting
    tools don't.`,
  },
  {
    icon: <LuNetwork />,
    title: "Card Title",
    descriptoin: `A card component has a figure, a body part, and inside body there
    are title and actions parts`,
    hoverText: `Databox is an absolute must in my tech stack. It allows me to
    track metrics that matter to me in a way that other reporting
    tools don't.`,
  },
  {
    icon: <LuNetwork />,
    title: "Card Title",
    descriptoin: `A card component has a figure, a body part, and inside body there
    are title and actions parts`,
    hoverText: `Databox is an absolute must in my tech stack. It allows me to
    track metrics that matter to me in a way that other reporting
    tools don't.`,
  },
  {
    icon: <LuNetwork />,
    title: "Card Title",
    descriptoin: `A card component has a figure, a body part, and inside body there
    are title and actions parts`,
    hoverText: `Databox is an absolute must in my tech stack. It allows me to
    track metrics that matter to me in a way that other reporting
    tools don't.`,
  },
  {
    icon: <LuNetwork />,
    title: "Card Title",
    descriptoin: `A card component has a figure, a body part, and inside body there
    are title and actions parts`,
    hoverText: `Databox is an absolute must in my tech stack. It allows me to
    track metrics that matter to me in a way that other reporting
    tools don't.`,
  },
  {
    icon: <LuNetwork />,
    title: "Card Title",
    descriptoin: `A card component has a figure, a body part, and inside body there
    are title and actions parts`,
    hoverText: `Databox is an absolute must in my tech stack. It allows me to
    track metrics that matter to me in a way that other reporting
    tools don't.`,
  },
];

export default function Features() {
  return (
    <>
      <section id="Features" className={`bg-[url(${backgroundImage})]`}>
        <div className="cssContainer ">
          <header className="header">
            <h2 className="max-w-200 mx-auto ">
              Unlock data.
              <span className="linearText"> Empower decisions.</span>
            </h2>
            <p className="max-w-175 mx-auto ">
              Your data is useless unless your team can quickly put it to work
              to make better decisions. And right now, they can’t. It’s siloed
              across teams and tools or gated behind software with steep prices
              and long learning curves.
            </p>
          </header>

          {/* Cards*/}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardContents.map((card, index) => (
              <FeaturesCard key={index} card={card}></FeaturesCard>
            ))}
          </div>

          {/* Cta*/}
          <div className="flex items-center justify-center mt-12">
            <PrimaryButton brand={true} link={"#"}>
              Why choose Databox
            </PrimaryButton>
          </div>
        </div>
      </section>
    </>
  );
}
