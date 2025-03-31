
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
    <header className="container mx-auto py-6 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center">
          <div className="bg-gradient-to-r from-shopone-purple to-shopone-pink rounded-full p-2 mr-3">
            <ShoppingBag className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold hero-gradient">
              ShopOne
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">For all your shopping needs</p>
          </div>
        </div>
        <div className="w-full md:w-auto flex items-center gap-4">
          <div className="flex items-center gap-2 mr-4">
            <Moon size={18} className={`text-gray-600 dark:text-gray-300 ${!isDarkMode ? 'opacity-50' : 'opacity-100'}`} />
            <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
            <Sun size={18} className={`text-gray-600 dark:text-gray-300 ${isDarkMode ? 'opacity-50' : 'opacity-100'}`} />
          </div>
          <div className="w-full md:w-auto flex-1 md:max-w-md relative">
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
      </div>
    </header>
  );
};

export default Header;
