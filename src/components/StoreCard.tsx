
import React from 'react';
import { Card } from '@/components/ui/card';

export interface Store {
  id: string;
  name: string;
  logo: string;
  url: string;
  categories: string[]; 
  description: string;
}

interface StoreCardProps {
  store: Store;
}

const StoreCard = ({ store }: StoreCardProps) => {
  return (
    <a href={store.url} target="_blank" rel="noopener noreferrer" className="block">
      <Card className="shop-card h-full dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 flex flex-col items-center text-center h-full">
          <div className="w-16 h-16 md:w-20 md:h-20 mb-4 flex items-center justify-center rounded-full bg-white dark:bg-gray-700 shadow-md p-2 animate-glow-soft">
            <img src={store.logo} alt={store.name} className="max-w-full max-h-full object-contain" />
          </div>
          <h3 className="text-xl font-semibold mb-2 dark:text-white">{store.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{store.description}</p>
        </div>
      </Card>
    </a>
  );
};

export default StoreCard;
