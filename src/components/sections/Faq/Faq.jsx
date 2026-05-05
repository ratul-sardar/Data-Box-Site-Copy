import React, { useState, memo } from "react";
import { ChevronDown } from "lucide-react";

function Faq({ faqData }) {
  if (!faqData) return null;

  const faqs = faqData?.faqs || [];

  return (
    <section id="faq" className="py-16">
      <div className="cssContainer">
        <header className="header">
          <h2 className="mb-4">
            {faqData?.heading?.split(faqData?.highlightedText)[0]}
            <span className="linearText">{faqData?.highlightedText}</span>
            {faqData?.heading?.split(faqData?.highlightedText)[1]}
          </h2>
          <p className="max-w-175 mx-auto text-gray-600">
            {faqData?.subheading}
          </p>
        </header>

        <div className="max-w-200 mx-auto flex flex-col gap-3 mt-12">
          {faqs.map((faq, index) => (
            <FaqCard key={index} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqCard({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="text-lg font-bold text-gray-900 pr-8">
          {faq.question}
        </span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="text-gray-400" />
        </span>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}

export default memo(Faq);
