
import React from 'react';

interface CategoriesProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const Categories = ({ categories, selectedCategory, setSelectedCategory }: CategoriesProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mb-10">
      <button
        onClick={() => setSelectedCategory('All')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          selectedCategory === 'All'
            ? 'bg-gradient-to-r from-shopone-purple to-shopone-pink text-white shadow-lg'
            : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-shopone-pink/10 dark:hover:bg-shopone-pink/20'
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            selectedCategory === category
              ? 'bg-gradient-to-r from-shopone-purple to-shopone-pink text-white shadow-lg'
              : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-shopone-pink/10 dark:hover:bg-shopone-pink/20'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
