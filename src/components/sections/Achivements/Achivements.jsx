import { FaStar } from "react-icons/fa6";
import logo1 from "../../../assets/imgi_55_MarketingAnalytics_HighPerformer_Mid-Market_Americas_HighPerformer-1.png";

export default function Achivements() {
  return (
    <section id="achivements" className="">
      <div className="cssContainer flex flex-col items-center justify-center gap-10">
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

        {/* Logos*/}
        <div className="flex gap-8 overflow-scroll">
          <img src={logo1} alt="logo" className="w-32" />
          <img src={logo1} alt="logo" className="w-32" />
          <img src={logo1} alt="logo" className="w-32" />
          <img src={logo1} alt="logo" className="w-32" />
          <img src={logo1} alt="logo" className="w-32" />
          <img src={logo1} alt="logo" className="w-32" />
          <img src={logo1} alt="logo" className="w-32" />
          <img src={logo1} alt="logo" className="w-32" />
        </div>
      </div>
    </section>
  );
}
