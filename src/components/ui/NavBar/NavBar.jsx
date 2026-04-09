import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import Logo from "../../../assets/logo.svg";
import { Sparkles, Menu as MenuIcon, X } from "lucide-react";
import MegaMenu from "./MegaMenu";
import { menuData } from "./data";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
      <nav className={`fixed top-0 z-50 left-0 right-0 transition-all duration-300 ${isScrolled ? "bg-white" : "bg-transparent"
        }`}>
        <div className="w-11/12 max-w-7xl mx-auto flex items-center justify-between h-20">

          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="Logo" className={`w-32 transition-all duration-300 ${useWhiteText ? 'brightness-0 invert' : ''}`} />
            </Link>
          </div>

          {/* Desktop Mega Menu Navigation */}
          <div className="hidden lg:flex flex-1 justify-center h-full">
            <MegaMenu isScrolled={isScrolled} />
          </div>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#" className={`text-sm font-bold transition-colors px-4 py-2 rounded-lg ${
              useWhiteText ? 'text-white hover:text-white/80' : 'text-gray-700 hover:text-brand hover:bg-gray-50'
            }`}>
              Login
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-200 px-4 py-2 rounded-lg transition-colors">
              Book a Demo
            </a>
            <button className="btn btn-primary bg-[#E7FE29] hover:bg-[#E7FE29] border-[#E7FE29] hover:border-[#E7FE29] text-black text-[1rem] font-semibold px-4 py-2 rounded-lg transition-colors">Try It Free</button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-4">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700"
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
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-b border-gray-100 z-40 max-h-[85vh] overflow-y-auto">
            <div className="px-4 pt-2 pb-6 space-y-1 w-11/12 mx-auto">
              {/* Product */}
              <div className="py-2 border-b border-gray-50">
                <details className="group">
                  <summary className="flex items-center justify-between font-medium text-gray-900 cursor-pointer list-none py-2">
                    <span>Product</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <div className="text-gray-600 mt-2 pl-4 flex flex-col gap-3 pb-3">
                    {menuData.product.items.map((item, idx) => (
                      <a key={idx} href="#" className="block hover:text-brand text-sm">{item.title}</a>
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
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <div className="text-gray-600 mt-2 pl-4 flex flex-col gap-3 pb-3">
                    <div className="text-xs font-semibold uppercase text-gray-400 mb-1">By Industry</div>
                    {menuData.solutions.industry.map((item, idx) => (
                      <a key={idx} href={item.link} className="block hover:text-brand text-sm">{item.title}</a>
                    ))}
                    <div className="text-xs font-semibold uppercase text-gray-400 mt-3 mb-1">By Role</div>
                    {menuData.solutions.role.map((item, idx) => (
                      <a key={idx} href={item.link} className="block hover:text-brand text-sm">{item.title}</a>
                    ))}
                  </div>
                </details>
              </div>

              {/* AI */}
              <div className="py-2 border-b border-gray-50 ">
                <a href="#" className="flex items-center gap-1 font-medium text-gray-900 py-2 cursor-pointer">
                  AI <Sparkles size={16} className="text-purple-500" />
                </a>
              </div>

              {/* Integrations */}
              <div className="py-2 border-b border-gray-50">
                <details className="group">
                  <summary className="flex items-center justify-between font-medium text-gray-900 cursor-pointer list-none py-2">
                    <span>Integrations</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <div className="text-gray-600 mt-2 pl-4 flex flex-col gap-3 pb-3 text-sm">
                    {menuData.integrations.columns.map((col, i) => (
                      <React.Fragment key={i}>
                        <div className="text-xs font-semibold uppercase text-gray-400 mt-1 mb-1">{col.title}</div>
                        {col.items.slice(0, 4).map((item, j) => (
                          <a key={j} href="#" className="block hover:text-brand">{item}</a>
                        ))}
                      </React.Fragment>
                    ))}
                    <a href="#" className="font-medium text-brand mt-2 block">See all Integrations</a>
                  </div>
                </details>
              </div>

              {/* Resources */}
              <div className="py-2 border-b border-gray-50">
                <details className="group">
                  <summary className="flex items-center justify-between font-medium text-gray-900 cursor-pointer list-none py-2">
                    <span>Resources</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <div className="text-gray-600 mt-2 pl-4 flex flex-col gap-3 pb-3 text-sm">
                    {menuData.resources.columns.map((col, i) => (
                      <React.Fragment key={i}>
                        <div className="text-xs font-semibold uppercase text-gray-400 mt-1 mb-1">{col.title}</div>
                        {col.items.map((item, j) => (
                          <a key={j} href="#" className="block hover:text-brand">{item}</a>
                        ))}
                      </React.Fragment>
                    ))}
                  </div>
                </details>
              </div>

              <div className="py-2 border-b border-gray-50">
                <Link to="/pricing" className="flex items-center font-medium text-gray-900 py-2">
                  Pricing
                </Link>
              </div>

              {/* Mobile Actions */}
              <div className="pt-6 pb-2 flex flex-col gap-3">
                <a href="#" className="text-center font-medium text-gray-700 bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg w-full">
                  Book a Demo
                </a>
                <a href="#" className="text-center font-medium text-white bg-brand px-4 py-3 rounded-lg w-full">
                  Try It Free
                </a>
                <a href="#" className="text-center font-medium text-gray-700 py-2 mt-2 w-full">
                  Login
                </a>
              </div>

            </div>
          </div>
        )}
      </nav>
    </>
  );
}
