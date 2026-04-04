import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function MenuItem({ title, menuKey, activeMenu, setActiveMenu, children, hideIcon = false }) {
  const isOpen = activeMenu === menuKey;

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
        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-brand ${isOpen ? 'text-brand' : 'text-gray-700'} cursor-pointer`}
        aria-expanded={isOpen}
      >
        {title}
        {!hideIcon && menuKey && (
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180 text-brand' : 'text-gray-400'}`} />
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
