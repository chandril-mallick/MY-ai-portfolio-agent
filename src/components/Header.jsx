import React from 'react';
import { Info } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6">
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-500">Chandril Mallick</span>
      </div>
      <button className="p-2 transition-colors rounded-full hover:bg-gray-100/50">
        <Info className="w-5 h-5 text-gray-400" />
      </button>
    </header>
  );
}
