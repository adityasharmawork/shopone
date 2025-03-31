
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import StoreCard from '@/components/StoreCard';
import Categories from '@/components/Categories';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { storeData, getCategories } from '@/data/StoreData';
import { Store } from '@/components/StoreCard';

// Top brands that should appear in the featured section
const TOP_BRANDS = ['Amazon', 'Flipkart', 'Myntra', 'Nykaa'];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredStores, setFilteredStores] = useState<Store[]>(storeData);
  const [topStores, setTopStores] = useState<Store[]>([]);
  const categories = getCategories();

  useEffect(() => {
    let filtered = storeData;
    
    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(store => 
        store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      // Clear top stores when searching
      setTopStores([]);
    } else {
      // Only show top brands when not searching and "All" category is selected
      if (selectedCategory === 'All') {
        const tops = storeData.filter(store => TOP_BRANDS.includes(store.name));
        setTopStores(tops);
      } else {
        setTopStores([]);
      }
    }
    
    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(store => 
        store.categories.includes(selectedCategory)
      );
    }
    
    setFilteredStores(filtered);
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-shopone-purple/5 via-white to-shopone-pink/5 dark:from-shopone-purple/10 dark:via-gray-900 dark:to-shopone-pink/10">
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-shopone-pink/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-shopone-purple/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-shopone-yellow/10 rounded-full filter blur-3xl"></div>
        
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        
        <div className="container mx-auto px-4 mt-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 dark:text-white">Discover Your Favorite <span className="hero-gradient">Stores</span> In One Place</h2>
            {/* <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">For all your shopping needs</p> */}
          </div>
          
          <Categories 
            categories={categories} 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory} 
          />

          {/* Top Choices Section - only shown when "All" category is selected and not searching */}
          {selectedCategory === 'All' && topStores.length > 0 && !searchQuery && (
            <>
              <div className="mt-10 mb-10">
                <h3 className="text-2xl font-semibold mb-8 text-center hero-gradient">Top Choices</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {topStores.map(store => (
                    <div key={`top-${store.id}`} className="transition-all duration-300 hover:translate-y-[-5px]">
                      <StoreCard store={store} />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="my-10">
                <Separator className="bg-gradient-to-r from-shopone-purple/20 via-shopone-pink/30 to-shopone-purple/20 h-0.5 dark:from-shopone-purple/30 dark:via-shopone-pink/40 dark:to-shopone-purple/30" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-8 text-center dark:text-white">All Stores</h3>
            </>
          )}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredStores.length > 0 ? (
              filteredStores.map(store => (
                <div key={store.id} className="transition-all duration-300 hover:translate-y-[-5px]" style={{ animationDelay: `${parseInt(store.id) * 0.1}s` }}>
                  <StoreCard store={store} />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl font-medium text-gray-500 dark:text-gray-400">No stores found matching your criteria</h3>
                <p className="mt-2 text-gray-400 dark:text-gray-500">Try adjusting your search or category filter</p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <div className="flex-grow"></div>
      
      <Footer />
    </div>
  );
};

export default Index;
