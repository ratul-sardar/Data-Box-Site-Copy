import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import Logo from "../../../assets/logo.svg";
import { Sparkles, Menu as MenuIcon, X, Calendar, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import MegaMenu from "./MegaMenu";
import { menuData } from "./data";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const location = useLocation();
  const isPricingPage = location.pathname === "/pricing";

  // Use white text if on pricing page and NOT scrolled
  const useWhiteText = isPricingPage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 z-50 left-0 right-0 transition-all duration-300 ${isScrolled ? "bg-white" : "bg-transparent"
          }`}
      >
        <div className="w-11/12 max-w-7xl mx-auto flex items-center justify-between h-20">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={Logo}
                alt="Logo"
                className={`w-32 transition-all duration-300 ${useWhiteText ? "invert contrast-200" : ""}`}
              />
            </Link>
          </div>

          {/* Desktop Mega Menu Navigation */}
          <div className="hidden xl:flex flex-1 justify-center h-full">
            <MegaMenu isScrolled={isScrolled} />
          </div>

          {/* Right side buttons */}
          <div className="hidden xl:flex items-center gap-4">
            <a
              href="#"
              className={`text-sm font-bold transition-colors px-4 py-2 rounded-lg ${useWhiteText
                ? "text-white hover:text-white/80"
                : "text-gray-700 hover:text-brand hover:bg-gray-50"
                }`}
            >
              Login
            </a>
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-200 px-4 py-2 rounded-lg transition-colors cursor-pointer"
            >
              Book a Demo
            </button>
            <button className="btn btn-primary bg-[#E7FE29] hover:bg-[#E7FE29] border-[#E7FE29] hover:border-[#E7FE29] text-black text-[1rem] font-semibold px-4 py-2 rounded-lg transition-colors">
              Try It Free
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex xl:hidden items-center gap-4">
            <button
              type="button"
              className={`transition-colors duration-300 ${useWhiteText ? "text-white" : "text-gray-700 hover:text-gray-900"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-lg border-b border-gray-100 z-40 max-h-[85vh] overflow-y-auto">
            <div className="px-4 pt-2 pb-6 space-y-1 w-11/12 mx-auto">
              {/* Product */}
              <div className="py-2 border-b border-gray-50">
                <details className="group">
                  <summary className="flex items-center justify-between font-medium text-gray-900 cursor-pointer list-none py-2">
                    <span>Product</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="text-gray-600 mt-2 pl-4 flex flex-col gap-3 pb-3">
                    {menuData.product.items.map((item, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="block hover:text-brand text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                </details>
              </div>

              {/* Solutions */}
              <div className="py-2 border-b border-gray-50">
                <details className="group">
                  <summary className="flex items-center justify-between font-medium text-gray-900 cursor-pointer list-none py-2">
                    <span>Solutions</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="text-gray-600 mt-2 pl-4 flex flex-col gap-3 pb-3">
                    <div className="text-xs font-semibold uppercase text-gray-400 mb-1">
                      By Industry
                    </div>
                    {menuData.solutions.industry.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.link}
                        className="block hover:text-brand text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </a>
                    ))}
                    <div className="text-xs font-semibold uppercase text-gray-400 mt-3 mb-1">
                      By Role
                    </div>
                    {menuData.solutions.role.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.link}
                        className="block hover:text-brand text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                </details>
              </div>

              {/* AI */}
              <div className="py-2 border-b border-gray-50 ">
                <a
                  href="#"
                  className="flex items-center gap-1 font-medium text-gray-900 py-2 cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  AI <Sparkles size={16} className="text-purple-500" />
                </a>
              </div>

              {/* Integrations */}
              <div className="py-2 border-b border-gray-50">
                <details className="group">
                  <summary className="flex items-center justify-between font-medium text-gray-900 cursor-pointer list-none py-2">
                    <span>Integrations</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="text-gray-600 mt-2 pl-4 flex flex-col gap-3 pb-3 text-sm">
                    {menuData.integrations.columns.map((col, i) => (
                      <React.Fragment key={i}>
                        <div className="text-xs font-semibold uppercase text-gray-400 mt-1 mb-1">
                          {col.title}
                        </div>
                        {col.items.slice(0, 4).map((item, j) => (
                          <a
                            key={j}
                            href="#"
                            className="block hover:text-brand"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item}
                          </a>
                        ))}
                      </React.Fragment>
                    ))}
                    <a href="#" className="font-medium text-brand mt-2 block" onClick={() => setIsMobileMenuOpen(false)}>
                      See all Integrations
                    </a>
                  </div>
                </details>
              </div>

              {/* Resources */}
              <div className="py-2 border-b border-gray-50">
                <details className="group">
                  <summary className="flex items-center justify-between font-medium text-gray-900 cursor-pointer list-none py-2">
                    <span>Resources</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="text-gray-600 mt-2 pl-4 flex flex-col gap-3 pb-3 text-sm">
                    {menuData.resources.columns.map((col, i) => (
                      <React.Fragment key={i}>
                        <div className="text-xs font-semibold uppercase text-gray-400 mt-1 mb-1">
                          {col.title}
                        </div>
                        {col.items.map((item, j) => (
                          <a
                            key={j}
                            href="#"
                            className="block hover:text-brand"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item}
                          </a>
                        ))}
                      </React.Fragment>
                    ))}
                  </div>
                </details>
              </div>

              <div className="py-2 border-b border-gray-50">
                <Link
                  to="/pricing"
                  className="flex items-center font-medium text-gray-900 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
              </div>

              {/* Mobile Actions */}
              <div className="pt-6 pb-2 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsDemoModalOpen(true);
                  }}
                  className="text-center font-medium text-gray-700 bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg w-full cursor-pointer"
                >
                  Book a Demo
                </button>
                <a
                  href="#"
                  className="text-center font-medium text-white bg-brand px-4 py-3 rounded-lg w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Try It Free
                </a>
                <a
                  href="#"
                  className="text-center font-medium text-gray-700 py-2 mt-2 w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        )}
        {/* Demo Modal */}
        <AnimatePresence>
          {isDemoModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsDemoModalOpen(false)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />

              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-brand/10 p-3 rounded-xl text-brand">
                      <Calendar size={28} />
                    </div>
                    <button
                      onClick={() => setIsDemoModalOpen(false)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-400 hover:text-gray-600"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Book a Personalized Demo</h2>
                  <p className="text-gray-600 mb-8">
                    See how Databox can help your team turn business data into actionable insights instantly.
                  </p>

                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-gray-700">First Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all outline-none"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-gray-700">Last Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all outline-none"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-gray-700">Work Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all outline-none"
                        placeholder="john@company.com"
                      />
                    </div>

                    <button className="w-full py-3 bg-brand text-white font-bold rounded-lg hover:bg-brand/90 transition-all shadow-lg shadow-brand/20 mt-4">
                      Schedule Demo
                    </button>
                  </form>

                  <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-center gap-6 text-xs text-gray-400 font-medium">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="text-green-500" />
                      14-day free trial
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="text-green-500" />
                      No credit card needed
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
