import React, { useEffect, useState } from 'react';
import { Search, ShoppingBag, Moon, Sun } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Header = ({ searchQuery, setSearchQuery }: HeaderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme based on system preference
  useEffect(() => {
    if (localStorage.theme === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
  };

  return (
    <header className="container mx-auto pb-4 px-4">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-shopone-purple to-shopone-pink rounded-full p-1.5 sm:p-2 mr-2 sm:mr-3">
              <ShoppingBag className="text-white" size={18} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold hero-gradient">
                ShopOne
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">For all your shopping needs</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Moon size={16} className={`text-gray-600 dark:text-gray-300 ${!isDarkMode ? 'opacity-50' : 'opacity-100'}`} />
            <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
            <Sun size={16} className={`text-gray-600 dark:text-gray-300 ${isDarkMode ? 'opacity-50' : 'opacity-100'}`} />
          </div>
        </div>
        
        <div className="w-full relative">
          <Input
            type="text"
            placeholder="Search stores..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 focus:border-shopone-pink/50 rounded-full shadow-sm dark:text-white"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
      </div>
    </header>
  );
};

export default Header;
