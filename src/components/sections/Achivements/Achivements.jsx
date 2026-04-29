import React, { memo } from "react";
import PrimaryButton from "../../ui/Button/PrimaryButton";
import { urlFor } from "../../../lib/sanityClient";
import { FaStar } from "react-icons/fa";

function Achivements({ achievementsData }) {
  if (!achievementsData) return null;

  // Use awardsLogos from Sanity schema
  const awards = achievementsData?.awardsLogos || [];

  return (
    <section id="achivements" className="">
      <div className="break-normal flex flex-col items-center justify-center gap-10">
        <div className="cssContainer break-normal flex flex-col items-center justify-center gap-10">
          {/* Achivement content */}
          <div className="flex items-center gap-4">
            {/* Item 1*/}
            <div className="flex items-center gap-2 p-1 border-r border-gray-400/70 ">
              <div className="rounded-full">
                <img
                  src="https://databox.com/wp-content/themes/databox/inc/img/templates/ratings/logo-g2.svg"
                  alt="logo-g2"
                  className=""
                />
              </div>

              <p className="font-bold text-gray-600">4.4</p>
              {/* Icon of a star*/}
              <span className="text-yellow-400">
                <FaStar />
              </span>
            </div>

            {/* Item 2*/}
            <div className="flex items-center gap-2 p-1 border-r border-gray-400/70  ">
              <div className="rounded-full">
                <img
                  src="https://databox.com/wp-content/themes/databox/inc/img/templates/ratings/logo-capterra.svg"
                  alt="logo-capterra"
                  className=""
                />
              </div>

              <p className="font-bold text-gray-600">4.6</p>
              {/* Icon of a star*/}
              <span className="text-yellow-400">
                <FaStar />
              </span>
            </div>

            {/* Item 3*/}
            <p className="text-xs lg:text-sm">based on 1,000+ reviews</p>
          </div>


          {/* Awards grid */}
          <div className="flex justify-center gap-10 flex-wrap">
            {awards.map((award, index) => (
              <div key={index} className="flex justify-center transition-transform hover:scale-110 duration-300">
                {award && (
                  <img
                    src={urlFor(award)?.url() || ""}
                    alt="Award Badge"
                    className="w-16 md:w-32 object-contain"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Achivements);
