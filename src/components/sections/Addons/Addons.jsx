import React from "react";
import AddonCard from "../../ui/AddonCard/AddonCard";
import { PaintRoller } from "lucide-react";

const cardData = [
  {
    icon: <PaintRoller size={40} />,
    price: "200",
    title: "Branding & White-labeling",
    body: "Create an on-brand experience by white-labeling your Databox Account. Allow users to login, view dashboards, and receive emails with your company's branding. Perfect if you plan to resell Databox to your clients.",
    catLink: "#",
  },
  {
    icon: <PaintRoller size={40} />,
    price: "14",
    title: "15 min sync per source",
    body: "Sync every 15 minutes for selected Data Sources. Not available for all data sources due to vendor's API limitations and rate limits.",
    catLink: "#",
  },
  {
    icon: <PaintRoller size={40} />,
    price: "40",
    title: "Fiscal calendar",
    body: "Monitor, visualize, and report on all of your business data based on your fiscal calendar to improve your accounting, performance, and revenue tracking processes.",
    catLink: "#",
  },
  {
    icon: <PaintRoller size={40} />,
    price: "custom pricing",
    title: "Custom metrics & dashboard creation",
    body: "Expert help setting up your initial Datasets, Dashboards, and Reports, plus training so you can confidently manage and expand your setup.",
    catLink: "#",
  },
  {
    icon: <PaintRoller size={40} />,
    price: "160",
    title: "Custom metrics & dashboard creation",
    body: "Expert help setting up your initial Datasets, Dashboards, and Reports, plus training so you can confidently manage and expand your setup.",
    catLink: "#",
  },
  {
    icon: <PaintRoller size={40} />,
    price: "160",
    title: "Custom metrics & dashboard creation",
    body: "Expert help setting up your initial Datasets, Dashboards, and Reports, plus training so you can confidently manage and expand your setup.",
    catLink: "#",
  },
  {
    icon: <PaintRoller size={40} />,
    price: "160",
    title: "Custom metrics & dashboard creation",
    body: "Expert help setting up your initial Datasets, Dashboards, and Reports, plus training so you can confidently manage and expand your setup.",
    catLink: "#",
  },
];

const Addons = () => {
  return (
    <section id="Addons" className="">
      <div className="cssContainer">
        <header className="header">
          <h2 className="max-w-200 mx-auto ">
            Upgrade Your Experience with Add-Ons
          </h2>
        </header>
        {/* Cards*/}
        <div className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <AddonCard key={index} card={card}></AddonCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Addons;
