import React from "react";
import AddonCard from "../../ui/AddonCard/AddonCard";
import { PaintRoller } from "lucide-react";



const Addons = ({ addonsData }) => {
  const addons = addonsData?.addons || [];
  const title = addonsData?.title || "Upgrade Your Experience with Add-Ons";
  const description = addonsData?.description;

  return (
    <section id="Addons" className="">
      <div className="cssContainer">
        <header className="header text-center mb-12">
          <h2 className="max-w-200 mx-auto mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {description}
            </p>
          )}
        </header>
        {/* Cards*/}
        <div className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-6">
          {addons.map((addon, index) => (
            <AddonCard 
              key={addon._key || index} 
              card={{
                icon: <PaintRoller size={40} />, // Defaulting to PaintRoller for now
                price: addon.price,
                title: addon.title,
                body: addon.description,
                catLink: addon.link || "#",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


export default Addons;

