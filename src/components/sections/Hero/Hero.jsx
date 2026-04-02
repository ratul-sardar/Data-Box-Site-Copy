import { FaStar } from "react-icons/fa";
import PrimaryButton from "../../ui/Button/PrimaryButton";

export default function Hero() {
  return (
    <>
      <section id="Hero" className="">
        <div className="cssContainer">
          <header className="grid place-items-center gap-6 text-center">
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
            <h1 className="max-w-225 mx-auto">
              <span className="bg-main-linear bg-clip-text text-transparent">
                AI-powered
              </span>{" "}
              analytics for teams that need answers now
            </h1>

            <p className="max-w-155 mx-auto">
              Turn business performance data into clear answers your team can
              understand, explain, and act on – instantly.
            </p>

            {/* Cta*/}
            <div className="flex gap-4">
              <PrimaryButton link={"#"} brand={true}>
                Try It Free
              </PrimaryButton>
              <PrimaryButton link={"#"}>Book a Demo</PrimaryButton>
            </div>

            <p className="text-sm">No credit card needed · Free-forever plan</p>
          </header>
        </div>
      </section>
    </>
  );
}
