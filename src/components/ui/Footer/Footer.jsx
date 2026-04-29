import React, { useEffect, useState, memo } from "react";
import PrimaryButton from "../Button/PrimaryButton";
import brandLogo from "../../../assets/dbx-logo-light.svg";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { client, urlFor } from "../../../lib/sanityClient";

// Default images as fallbacks
import googlePlayImage from "../../../assets/google-play.svg";
import appStoreImage from "../../../assets/app-store.svg";

const iconMap = {
  FaFacebook: <FaFacebook />,
  FaTwitter: <FaTwitter />,
  FaLinkedin: <FaLinkedin />,
  FaYoutube: <FaYoutube />,
};

function Footer({ footerData: initialData }) {
  const [footerData, setFooterData] = useState(initialData);

  useEffect(() => {
    if (!initialData) {
      // Fetch footer data from homePage document if not passed as prop
      const query = `*[_type == "homePage"][0].footerSection`;
      client.fetch(query).then((data) => {
        if (data) setFooterData(data);
      }).catch(err => console.error("Footer fetch error:", err));
    } else {
      setFooterData(initialData);
    }
  }, [initialData]);

  if (!footerData) return null;

  return (
    <footer
      id="footer"
      className="relative"
      style={{
        background: `linear-gradient(29deg, rgba(43, 58, 103, 1) 0%, rgba(72, 35, 91, 1) 36%, rgba(68, 24, 60, 1) 67%, rgba(93, 45, 41, 1) 100%)`,
      }}
    >
      <div className="cssContainer py-16 text-white space-y-8">
        <header className="max-w-175 mx-auto text-center lg:mb-23 flex flex-col gap-8 items-center justify-center">
          <h3 className="text-[1.75rem] sm:text-[2.25rem] lg:text-[3.375rem] font-bold leading-tight break-words">
            {footerData.ctaHeading || "Make better decisions, together, faster."}
          </h3>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <PrimaryButton
              link={footerData.ctaButton1Link || "#"}
              className="w-full sm:w-auto min-w-[180px]"
            >
              {footerData.ctaButton1Text || "Try It Free"}
            </PrimaryButton>
            <PrimaryButton
              link={footerData.ctaButton2Link || "#"}
              className={`bg-transparent border-2 border-white hover:bg-white text-white hover:text-black w-full sm:w-auto min-w-45 transition-all`}
            >
              {footerData.ctaButton2Text || "Book a demo"}
            </PrimaryButton>
          </div>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 break-normal">
          <div className="space-y-6">
            <div className="space-y-4">
              <img src={brandLogo} alt="brand logo" className="" />
              <p className="text-sm text-gray-100">
                {footerData.address || "Databox Inc. HQ: Boston, MA, USA"}
              </p>
              <p className="font-semibold text-gray-200">
                {footerData.tagline || "Modern BI for teams that needs answers now"}
              </p>

              <div className="flex gap-2">
                {footerData.socialLinks?.map((social, idx) => (
                  <a key={idx} href={social.url} className="text-xl hover:opacity-80 transition-opacity">
                    {iconMap[social.platform] || <FaFacebook />}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {footerData.awards?.map((award, idx) => (
                <img
                  key={idx}
                  src={award.image ? urlFor(award.image).url() : ""}
                  alt={award.altText || "Award"}
                  className="max-w-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              ))}
            </div>
          </div>

          {footerData.linkGroups?.map((group, idx) => (
            <div key={idx} className="space-y-2.5">
              <p className="font-extrabold text-[18px]">{group.title}</p>
              <ul className="flex flex-col gap-1.5 text-sm">
                {group.links?.map((link, lIdx) => (
                  <a
                    key={lIdx}
                    href={link.url}
                    className="hover:underline hover:underline-offset-1 w-fit text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-gray-300 text-center grid justify-center gap-5 break-normal border-t border-white/10 pt-8">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {footerData.legalLinks?.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.url}
                  className="hover:underline hover:underline-offset-1 text-gray-300 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-4 justify-center">
            <a href={footerData.googlePlayLink || "#"} className="transition-transform hover:scale-105">
              <img src={googlePlayImage} alt="Google Play" className="w-36" />
            </a>
            <a href={footerData.appStoreLink || "#"} className="transition-transform hover:scale-105">
              <img src={appStoreImage} alt="App Store" className="w-36" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
