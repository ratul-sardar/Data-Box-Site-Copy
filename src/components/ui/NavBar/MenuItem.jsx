import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router';

export default function MenuItem({ title, menuKey, activeMenu, setActiveMenu, children, hideIcon = false, isScrolled }) {
  const isOpen = activeMenu === menuKey;
  const location = useLocation();
  const isPricingPage = location.pathname === "/pricing";
  const useWhiteText = isPricingPage && !isScrolled;

  const handleClick = (e) => {
    if (menuKey) {
      e.preventDefault();
      setActiveMenu(isOpen ? null : menuKey);
    }
  };

  return (
    <div className="relative flex items-center h-full">
      <button
        onClick={handleClick}
        className={`flex items-center gap-1 px-3 py-2 text-sm transition-colors hover:text-brand font-bold ${
          isOpen ? 'text-brand' : (useWhiteText ? 'text-white hover:text-white/80' : 'text-gray-700')
        } cursor-pointer`}
        aria-expanded={isOpen}
      >
        {title}
        {!hideIcon && menuKey && (
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180 text-brand' : (useWhiteText ? 'text-white' : 'text-gray-400')}`} />
        )}
      </button>

      {/* Dropdown Panel Content */}
      {menuKey && (
        <div
          className={`absolute top-full left-0 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'} transition-all duration-300 ease-in-out origin-top z-50`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
