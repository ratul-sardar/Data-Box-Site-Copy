import dashboard from "../../../assets/luke-chesser-JKUTrJ4vK00-unsplash.jpg";

import {
  MessageSquare,
  Layout,
  LineChart,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";

import PrimaryButton from "../../ui/Button/PrimaryButton";
import { urlFor } from "../../../lib/sanityClient";

export default function Demo({ demoData }) {
  console.log("Demo DAta: ", demoData);
  return (
    <section id="demo" className="">
      <div className="cssContainer">
        <header className="header">
          <h2 className="max-w-200 mx-auto ">
            {demoData?.blackHeading}
            <span className="linearText"> {demoData?.colorHeading}</span>
          </h2>

          <p className="max-w-175 mx-auto ">{demoData?.subHeading}</p>
        </header>

        {/* Background Gradient Wrapper */}

        <div
          className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden pb-16 px-6 sm:px-12"
          style={{
            background: `
              radial-gradient(55% 85% at 50% 18.91%, #fff 40%, rgba(255, 255, 255, 0) 100%),
              radial-gradient(70% 70% at 50% 50%, #fff 55%, rgba(255, 255, 255, 0) 90%),
              linear-gradient(179deg, rgba(255, 255, 255, 0.5) 29.22%, rgba(255, 146, 69, 0.5) 59.73%, rgba(255, 81, 160, 0.5) 78.94%, rgba(58, 39, 255, 0.5) 98.53%)
            `,
          }}
        >
          {/* Dashboard Image Container */}
          <div className="relative mx-auto max-w-4xl bg-white rounded-xl  overflow-hidden border border-gray-100 mb-16">
            {demoData?.img && (
              <img
                src={urlFor(demoData.img)?.url()}
                alt="Genie Dashboard Interface"
                className="w-full h-auto object-cover"
              />
            )}
          </div>

          {/* Features Grid */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
            {/* Feature 1: Ask */}

            <div className="flex flex-col gap-3">
              <MessageSquare
                className="text-emerald-500 w-8 h-8"
                strokeWidth={1.5}
              />

              <p className="text-[15px] leading-snug">
                <span className="font-bold">Ask</span> business performance
                questions in plain language
              </p>
            </div>

            {/* Feature 2: Create */}

            <div className="flex flex-col gap-3">
              <Layout className="text-orange-400 w-8 h-8" strokeWidth={1.5} />

              <p className="text-[15px] leading-snug">
                <span className="font-bold">Create</span> metrics and dashboards
                with a prompt
              </p>
            </div>

            {/* Feature 3: Understand */}

            <div className="flex flex-col gap-3">
              <LineChart className="text-pink-400 w-8 h-8" strokeWidth={1.5} />

              <p className="text-[15px] leading-snug">
                <span className="font-bold">Understand</span> what's driving
                changes in your metrics
              </p>
            </div>

            {/* Feature 4: Train */}

            <div className="flex flex-col gap-3">
              <BrainCircuit
                className="text-purple-600 w-8 h-8"
                strokeWidth={1.5}
              />

              <p className="text-[15px] leading-snug">
                <span className="font-bold">Train</span> Genie your business
                context
              </p>
            </div>
          </div>

          {/* CTA Buttons */}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <PrimaryButton
              link={"#"}
              brand={true}
              className="w-full sm:w-auto min-w-[180px]"
            >
              Learn more
            </PrimaryButton>

            <PrimaryButton
              link={"#"}
              className="w-full sm:w-auto min-w-[180px]"
            >
              Watch Full Video
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
