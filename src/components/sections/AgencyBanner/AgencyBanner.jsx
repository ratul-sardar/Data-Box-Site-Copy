import { Check } from "lucide-react";
import React from "react";
import PrimaryButton from "../../ui/Button/PrimaryButton";
import { urlFor } from "../../../lib/sanityClient";

const AgencyBanner = ({ agencyBannerData }) => {
  const heading = agencyBannerData?.heading || "Exclusive benefits for Marketing Agencies, RevOps Agencies, and Consulting Businesses";
  const features = agencyBannerData?.features || [];
  const image = agencyBannerData?.sideImage;
  const ribbonText = agencyBannerData?.ribbonText || "AGENCIES";

  return (
    <section id="AgencyBanner" className="bg-[#edf1fe]">
      <div className="cssContainer break-normal py-20 relative flex flex-col xl:flex-row gap-8 lg:gap-12">
        {/* Agency Ribbon */}
        <div className="ribbon">

        </div>

        {/* Left Side */}
        <div className="w-full space-y-6">
          {/* Title */}
          <h3 className="">
            {heading}
          </h3>

          {/* Label text */}
          <div className="space-y-3">
            {features.map((item, index) => (
              <div key={item._key || index} className="flex gap-2">
                <span className="text-green-400">
                  <Check />
                </span>
                <p className="">
                  <span className="font-bold">{item.title}</span> {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Cta */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-wrap">
            {/* Cta 1 */}
            {agencyBannerData?.primaryButton?.text && (
              <PrimaryButton brand={true} link={agencyBannerData?.primaryButton?.link || "#"}>
                {agencyBannerData.primaryButton.text}
              </PrimaryButton>
            )}

            {/* Cta 2 */}
            {agencyBannerData?.secondaryButton?.text && (
              <PrimaryButton link={agencyBannerData?.secondaryButton?.link || "#"}>
                {agencyBannerData.secondaryButton.text}
              </PrimaryButton>
            )}
          </div>

          <div className="mt-4">
            <p className="text-gray-600">
              Or{" "}
              <a
                href={agencyBannerData?.callLink || "#"}
                className="text-blue-600 font-semibold hover:underline"
              >
                {agencyBannerData?.callLinkText || "book a call."}
              </a>
            </p>
          </div>
        </div>

        {/*Right Side*/}
        <div className="w-full">
          {image && (
            <img
              src={urlFor(image).url()}
              alt={heading}
              className="w-full"
            />
          )}
        </div>
      </div>
    </section>
  );
};


export default AgencyBanner;

