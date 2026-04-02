import { Check, X } from "lucide-react";
import PrimaryButton from "../../ui/Button/PrimaryButton";

const beforeDataBox = [
  "Per-seat licenses and consulting fees put BI out of reach.",
  "ETL projects, custom code, SQL queries, and IT backlogs stall momentum.",
  "You submit tickets and wait days for new metrics or ad-hoc reports.",
  "Fragmented tools lead to silos, debates, and more questions.",
  "Leaders miss opportunities because performance updates come too late.",
];

const afterDataBox = [
  "Per-seat licenses and consulting fees put BI out of reach.",
  "ETL projects, custom code, SQL queries, and IT backlogs stall momentum.",
  "You submit tickets and wait days for new metrics or ad-hoc reports.",
  "Fragmented tools lead to silos, debates, and more questions.",
  "Leaders miss opportunities because performance updates come too late.",
];

export default function WhyUs() {
  return (
    <>
      <section id="whyUs" className="">
        <div className="cssContainer">
          <header className="header">
            <h2 className="">
              Business intelligence,
              <br />
              <span className="linearText">without the baggage</span>
            </h2>
            <p className="max-w-175 mx-auto ">
              Databox removes the complicated setup, steep price, and long
              learning curve. Your data finally works at the speed of your
              business. With our self-service business intelligence, or DIY BI,
              anyone on your team can build dashboards and reports in minutes.
            </p>
          </header>

          {/* Cards*/}
          <div className="flex max-md:flex-col gap-8">
            {/* beforeDataBox*/}
            <div className="space-y-2 p-8 rounded-3xl bg-base-300/20 border border-gray-400/10">
              <p className="font-extrabold">BEFORE DATABOX</p>
              <ul className="space-y-1.5">
                {beforeDataBox.map((item, index) => (
                  <li key={index} className="flex gap-1.5">
                    <X className="text-red-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* afterDataBox*/}
            <div className="space-y-2 p-8 rounded-3xl bg-purple-500/10 border border-gray-400/10">
              <p className="font-extrabold">After DataBox</p>
              <ul className="space-y-1.5">
                {afterDataBox.map((item, index) => (
                  <li key={index} className="flex gap-1.5">
                    <Check className="text-purple-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cta*/}
          <div className="flex flex-col items-center gap-1.5 mt-9">
            <PrimaryButton brand={true}>Try It Free</PrimaryButton>
            <p className="xs text-gray-500">No card required</p>
          </div>
        </div>
      </section>
    </>
  );
}
