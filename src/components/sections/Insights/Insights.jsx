import React, { memo } from "react";

function Insights({ insightsData }) {
  if (!insightsData) return null;

  return (
    <section id="insights" className="py-16">
      <div className="cssContainer">
        <header className="max-w-205 mx-auto text-center">
          <h2 className="mb-1.5">
            {insightsData?.heading?.split(insightsData?.highlightedText)[0]}
            <span className="linearText"> {insightsData?.highlightedText}</span>
            {insightsData?.heading?.split(insightsData?.highlightedText)[1]}
          </h2>
          <p className="text-gray-600">
            {insightsData?.descriptionFirst}
          </p>
          <br />
          <p className="text-gray-600">
            {insightsData?.descriptionSecond}
          </p>
        </header>
      </div>
    </section>
  );
}

export default memo(Insights);
