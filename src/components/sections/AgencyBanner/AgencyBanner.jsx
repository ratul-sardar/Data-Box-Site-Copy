import { Check } from "lucide-react";
import React from "react";
import PrimaryButton from "../../ui/Button/PrimaryButton";
import bannerImage from "../../../assets/hero-explore-key-feature-image/dashboards-2x.png";

const features = [
  {
    title: `Save time:`,
    body: `Manage unlimited client accounts in one platform, while leveraging AI and automations to tackle the routine work so your team can focus on optimizing results and strengthening client relationships.`,
  },
  {
    title: `Save time:`,
    body: `Manage unlimited client accounts in one platform, while leveraging AI and automations to tackle the routine work so your team can focus on optimizing results and strengthening client relationships.`,
  },
  {
    title: `Save time:`,
    body: `Manage unlimited client accounts in one platform, while leveraging AI and automations to tackle the routine work so your team can focus on optimizing results and strengthening client relationships.`,
  },
];

const AgencyBanner = () => {
  return (
    <section id="AgencyBanner" className="bg-[#edf1fe]">
      <div className="cssContainer py-20 relative flex flex-col xl:flex-row gap-8 lg:gap-12">
        {/* Agency Ribbon */}
        <div className="ribbon"></div>

        {/* Left Side */}
        <div className="w-full space-y-6">
          {/* Title */}
          <h3 className="">
            Exclusive benefits for Marketing Agencies, RevOps Agencies, and
            Consulting Businesses
          </h3>

          {/* Label text */}
          <div className="space-y-3">
            {features.map((item, index) => (
              <div key={index} className="flex gap-2">
                <span className="text-green-400">
                  <Check />
                </span>
                <p className="">
                  <span className="font-bold">{item.title}</span> {item.body}
                </p>
              </div>
            ))}
          </div>

          {/* Cta */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-wrap">
            {/* Cta 1 */}
            <PrimaryButton brand={true} link={"#"}>
              Start an Agency Free Trial
            </PrimaryButton>

            {/* Cta 2 */}
            <PrimaryButton link={"#"}>Learn More</PrimaryButton>
          </div>
          <div className="mt-4">
            <p className="text-gray-600">
              Or{" "}
              <a href="#" className="text-blue-600 font-semibold hover:underline">
                book a call.
              </a>
            </p>
          </div>
        </div>

        {/*Right Side*/}
        <div className="w-full">
          <img src={bannerImage} alt="Banner image" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default AgencyBanner;
