import PrimaryButton from "../Button/PrimaryButton";
import brandLogo from "../../../assets/dbx-logo-light.svg";
import { FaFacebook } from "react-icons/fa";

// Awards Image
import awardsImg1 from "../../../assets/imgi_55_MarketingAnalytics_HighPerformer_Mid-Market_Americas_HighPerformer-1.png";
import awardsImg2 from "../../../assets/imageye___-_imgi_69_g2-crowd-with-rating.png";
import awardsImg3 from "../../../assets/imageye___-_imgi_70_capterra-with-rating.png";

// Download apps
import googlePlayImage from "../../../assets/google-play.svg";
const googlePlayLink = "#";

import appStoreImage from "../../../assets/app-store.svg";
const appStoreLink = "#";

// social links
const socialLink1 = "#";
const socialLink2 = "#";
const socialLink3 = "#";
const socialLink4 = "#";

// Footer Links
const link1 = [
  {
    name: "Overview",
    link: "#",
  },
  {
    name: "Integrations",
    link: "#",
  },
  {
    name: "Datasets",
    link: "#",
  },
  {
    name: "Metrics & KPIs",
    link: "#",
  },
  {
    name: "Dashboards",
    link: "#",
  },
  {
    name: "Reports",
    link: "#",
  },
];

// Leagl Links
const Ligal = [
  {
    name: "Terms of Service",
    link: "#",
  },
  {
    name: "Privacy Policy",
    link: "#",
  },
  {
    name: "GDPR",
    link: "#",
  },
  {
    name: "Cookies Policy",
    link: "#",
  },
];

export default function Footer() {
  return (
    <>
      <div
        id="footer"
        className={``}
        style={{
          background: `linear-gradient(29deg, rgba(43, 58, 103, 1) 0%, rgba(72, 35, 91, 1) 36%, rgba(68, 24, 60, 1) 67%, rgba(93, 45, 41, 1) 100%)`,
        }}
      >
        <div className="cssContainer py-16 text-white space-y-8">
          <header className="max-w-175 mx-auto text-center  lg:mb-23 flex flex-col gap-8 items-center justify-center ">
            <h3 className="text-[1.75rem] sm:text-[2.25rem] lg:text-[3.375rem] font-bold leading-tight break-words">
              Make better decisions, together, faster.
            </h3>

            {/* Cta*/}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <PrimaryButton
                link={"#"}
                className="w-full sm:w-auto min-w-[180px]"
              >
                Try It Free
              </PrimaryButton>
              <PrimaryButton
                link={"#"}
                className={`bg-transparent border-2 border-white hover:bg-white text-white hover:text-black w-full sm:w-auto min-w-45 transition-all`}
              >
                Book a demo
              </PrimaryButton>
            </div>
          </header>

          {/* Footer Links*/}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 break-normal">
            {/* Brand panal*/}
            <div className="space-y-6">
              {/* Brand logo*/}
              <div className="space-y-4">
                <img src={brandLogo} alt="brand logo" className="" />
                <p className="text-sm text-gray-100">
                  Databox Inc. HQ: Boston, MA, USA
                </p>
                <p className="font-semibold text-gray-200">
                  Modern BI for teams that <br /> needs answers now
                </p>

                {/* social link*/}
                <div className="flex gap-2">
                  <a href={socialLink1} className="text-xl ">
                    <FaFacebook />
                  </a>
                  <a href={socialLink2} className="text-xl ">
                    <FaFacebook />
                  </a>
                  <a href={socialLink3} className="text-xl ">
                    <FaFacebook />
                  </a>
                  <a href={socialLink4} className="text-xl ">
                    <FaFacebook />
                  </a>
                </div>
              </div>

              {/* awards logo*/}
              <div className="">
                <img
                  src={awardsImg1}
                  alt="awards logo"
                  className="max-w-20 inline-block mb-4"
                />
                <div className="flex">
                  <img
                    src={awardsImg2}
                    alt="awards logo"
                    className="max-w-20"
                  />
                  <img
                    src={awardsImg3}
                    alt="awards logo"
                    className="max-w-20"
                  />
                </div>
              </div>
            </div>

            {/* Link 1*/}
            <div className="space-y-2.5 ">
              <p className="font-extrabold text-[18px] ">Product</p>

              <ul className="flex flex-col gap-1.5 text-sm ">
                {link1.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    className="hover:underline hover:underline-offset-1 w-fit"
                  >
                    {item.name}
                  </a>
                ))}
              </ul>
            </div>

            {/* Link 2*/}
            <div className="space-y-2.5">
              <p className="font-extrabold text-[18px] ">Compare</p>

              <ul className="flex flex-col gap-1.5 text-sm ">
                {link1.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    className="hover:underline hover:underline-offset-1 w-fit"
                  >
                    {item.name}
                  </a>
                ))}
              </ul>
            </div>

            {/* Link 3*/}
            <div className="space-y-2.5">
              <p className="font-extrabold text-[18px] ">Company</p>

              <ul className="flex flex-col gap-1.5 text-sm ">
                {link1.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    className="hover:underline hover:underline-offset-1 w-fit"
                  >
                    {item.name}
                  </a>
                ))}
              </ul>
            </div>

            {/* Link 4*/}
            <div className="space-y-2.5">
              <p className="font-extrabold text-[18px] ">Support & Resources</p>

              <ul className="flex flex-col gap-1.5 text-sm ">
                {link1.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    className="hover:underline hover:underline-offset-1 w-fit"
                  >
                    {item.name}
                  </a>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Bottom part*/}
          <div className="text-gray-300 text-center grid justify-center gap-5 break-normal">
            {/* Legal Links*/}
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              {Ligal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="hover:underline hover:underline-offset-1 text-gray-300 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* download apps*/}
            <div className="flex gap-4 justify-center">
              <a href={googlePlayLink} className="">
                <img src={googlePlayImage} alt="" className="w-36" />
              </a>
              <a href={appStoreLink} className="">
                <img src={appStoreImage} alt="" className="w-36" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
