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
import HowItWorksBg from "../../../assets/data-workflow.png";


export default function HowItWorks({ howItWorksData }) {
  console.log(howItWorksData);
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
          <header className="header">
            <h2 className="max-w-200 mx-auto ">
              <span className="linearText">
                {howItWorksData?.headingFirstPart}
              </span>{" "}
              {howItWorksData?.headingHighlight}
            </h2>
            <p className="max-w-175 mx-auto ">
              {howItWorksData?.subHeading}
            </p>
          </header>
          {/* Cards*/}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {howItWorksData?.cards?.map((card) => {
              return <HowItWorksCard key={card._key} card={card}></HowItWorksCard>;
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
