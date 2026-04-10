import React, { useState, useRef, useEffect } from 'react';
import MenuItem from './MenuItem';
import { ProductPanel, SolutionsPanel, IntegrationsPanel, ResourcesPanel } from './MenuPanels';
import { Link, useLocation } from 'react-router';
import { Sparkles } from 'lucide-react';

export default function MegaMenu({ isScrolled }) {
  const location = useLocation();
  const isPricingPage = location.pathname === "/pricing";
  const useWhiteText = isPricingPage && !isScrolled;
  const [activeMenu, setActiveMenu] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (menuName) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150); // slight delay to allow moving mouse into dropdown
  };

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveMenu(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.mega-menu-container')) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="mega-menu-container flex items-center h-full z-50">
      <ul className="flex items-center gap-2 h-full menu-horizontal px-1 relative">
        <li className="h-full" onMouseEnter={() => handleMouseEnter('product')} onMouseLeave={handleMouseLeave}>
          <MenuItem title="Product" menuKey="product" activeMenu={activeMenu} setActiveMenu={setActiveMenu} isScrolled={isScrolled} />
        </li>
        <li className="h-full" onMouseEnter={() => handleMouseEnter('solutions')} onMouseLeave={handleMouseLeave}>
          <MenuItem title="Solutions" menuKey="solutions" activeMenu={activeMenu} setActiveMenu={setActiveMenu} isScrolled={isScrolled} />
        </li>
        <li className="h-full flex items-center font-medium py-2 cursor-pointer" onMouseEnter={() => handleMouseEnter('ai')} onMouseLeave={handleMouseLeave}>
          {/* AI is just a link without a dropdown in the screenshot but has a little sparkle icon, wait, databox AI has a special icon */}
          <MenuItem title="AI" activeMenu={activeMenu} setActiveMenu={setActiveMenu} hideIcon isScrolled={isScrolled} />
          <Sparkles className="w-3 h-3 text-purple-950" />
        </li>
        <li className="h-full" onMouseEnter={() => handleMouseEnter('integrations')} onMouseLeave={handleMouseLeave}>
          <MenuItem title="Integrations" menuKey="integrations" activeMenu={activeMenu} setActiveMenu={setActiveMenu} isScrolled={isScrolled} />
        </li>
        <li className="h-full" onMouseEnter={() => handleMouseEnter('resources')} onMouseLeave={handleMouseLeave}>
          <MenuItem title="Resources" menuKey="resources" activeMenu={activeMenu} setActiveMenu={setActiveMenu} isScrolled={isScrolled} />
        </li>
        <li className="h-full">
          <div className="relative flex items-center h-full">
            <Link to="/pricing" onClick={() => setActiveMenu(null)} className={`flex items-center gap-1 px-3 py-2 text-sm font-bold transition-colors ${useWhiteText ? 'text-white hover:text-white/80' : 'text-gray-700 hover:text-brand'
              }`}>
              Pricing
            </Link>
          </div>
        </li>
      </ul>

      {/* Mega Menu Dropdown Container */}
      <div
        className={`absolute top-[100%] left-1/2 -translate-x-1/2 w-[90vw] max-w-[1100px] mt-2 bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 transition-all duration-300 ease-out origin-top max-h-[85vh] overflow-y-auto ${activeMenu && activeMenu !== 'ai' ? 'opacity-100 translate-y-0 visible pointer-events-auto' : 'opacity-0 -translate-y-2 invisible pointer-events-none'
          }`}
        onMouseEnter={() => handleMouseEnter(activeMenu)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="p-8">
          {activeMenu === 'product' && <ProductPanel closeMenu={() => setActiveMenu(null)} />}
          {activeMenu === 'solutions' && <SolutionsPanel closeMenu={() => setActiveMenu(null)} />}
          {activeMenu === 'integrations' && <IntegrationsPanel closeMenu={() => setActiveMenu(null)} />}
          {activeMenu === 'resources' && <ResourcesPanel closeMenu={() => setActiveMenu(null)} />}
        </div>
      </div>
    </div>
  );
}
