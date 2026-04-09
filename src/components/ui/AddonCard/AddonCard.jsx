import React from "react";

const AddonCard = ({ card }) => {
  const { icon = "", price = "", title = "", body = "", catLink = "" } = card;
  return (
    <div className="card w-full max-w-md min-h-101 bg-base-100 shadow-md border border-gray-500/30">
      <div className="card-body p-8">
        {/* Header Section */}
        <div className="flex justify-between items-start">
          <div className="text-primary">
            {/* Card Icon */}

            {icon}
          </div>
          {price === "custom pricing" ? (
            <div className="text-right">
              <div className="flex items-start justify-end">
                <p className="text-md font-semibold text-base-content/60 self-center ml-1">
                  {price}
                </p>
              </div>
            </div>
          ) : (
            <div className="text-right">
              <div className="flex items-start justify-end">
                <span className="text-sm font-bold mt-1">$</span>
                <span className="text-xl font-semibold tracking-tight text-base-content">
                  {price}
                </span>
                <span className="text-sm text-base-content/60 self-center ml-1">
                  /month
                </span>
              </div>
              <p className="text-xs text-base-content/50 font-medium mt-1">
                billed yearly
              </p>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="card-title text-xl font-bold mt-6 mb-2">{title}</h3>

        {/* Description */}
        <p className="text-base-content/90 leading-relaxed text-sm">{body}</p>

        {/* Footer Link */}
        <div className="card-actions mt-8">
          <a
            href={catLink}
            className="text-primary font-semibold text-sm hover:underline transition-all"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default AddonCard;
