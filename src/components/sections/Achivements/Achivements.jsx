import React, { memo } from "react";
import PrimaryButton from "../../ui/Button/PrimaryButton";
import { urlFor } from "../../../lib/sanityClient";
import { FaStar } from "react-icons/fa";

const platformLogos = {
  g2: "https://databox.com/wp-content/themes/databox/inc/img/templates/ratings/logo-g2.svg",
  capterra: "https://databox.com/wp-content/themes/databox/inc/img/templates/ratings/logo-capterra.svg",
};

function Achivements({ achievementsData }) {
  if (!achievementsData) return null;

  const { ratings = [], reviewText = "based on 1,000+ reviews", awards = [] } = achievementsData;

  return (
    <section id="achivements" className="">
      <div className="cssContainer">
        <div className="flex flex-col items-center justify-center gap-10">
          {/* Ratings Content */}
          {/* Icons*/}
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
          <div className="flex justify-center gap-8 md:gap-16 flex-wrap mt-4">
            {awards.map((award, index) => (
              <div
                key={award._key || index}
                className="flex justify-center transition-all hover:scale-105 duration-300"
              >
                {award.logo && (
                  <img
                    src={urlFor(award.logo).url()}
                    alt={award.alt || "Award Badge"}
                    className="w-32 object-contain"
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

