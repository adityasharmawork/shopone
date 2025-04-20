import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import StoreCard from '@/components/StoreCard';
import Categories from '@/components/Categories';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { storeData, getCategories } from '@/data/StoreData';
import { Store } from '@/components/StoreCard';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

// Top brands that should appear in the featured section
const TOP_BRANDS = ['Amazon', 'Flipkart', 'Myntra', 'Nykaa', 'Nykaa Fashion', 'Ajio', 'Buykaro', 'M Caffeine', 'The Derma Co', 'mamaearth', 'Wow', 'Croma', 'Clovia', 'The Man Company'];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredStores, setFilteredStores] = useState<Store[]>(storeData);
  const [topStores, setTopStores] = useState<Store[]>([]);
  const [showAllTopStores, setShowAllTopStores] = useState(false);
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
    // Reset showAllTopStores when changing filters
    setShowAllTopStores(false);
  }, [searchQuery, selectedCategory]);

  // Determine which top stores to display
  const displayedTopStores = showAllTopStores ? topStores : topStores.slice(0, 6);
  const hasMoreTopStores = topStores.length > 6;

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
              <div className="mt-10 mb-6">
                <h3 className="text-2xl font-semibold mb-8 text-center hero-gradient">Top Choices</h3>
                
                {/* Mobile view - limited stores with Show More button */}
                <div className="md:hidden grid grid-cols-2 gap-4">
                  {displayedTopStores.map(store => (
                    <div key={`top-${store.id}`} className="transition-all duration-300 hover:translate-y-[-5px]">
                      <StoreCard store={store} />
                    </div>
                  ))}
                </div>
                
                {/* Desktop view - all stores at once */}
                <div className="hidden md:grid md:grid-cols-4 gap-6">
                  {topStores.map(store => (
                    <div key={`top-${store.id}`} className="transition-all duration-300 hover:translate-y-[-5px]">
                      <StoreCard store={store} />
                    </div>
                  ))}
                </div>
                
                {/* Show More button for mobile only */}
                {hasMoreTopStores && !showAllTopStores && (
                  <div className="md:hidden mt-6 flex flex-col items-center">
                    {/* <Separator className="w-full mb-6 bg-gradient-to-r from-shopone-purple/20 via-shopone-pink/30 to-shopone-purple/20 h-0.5 dark:from-shopone-purple/30 dark:via-shopone-pink/40 dark:to-shopone-purple/30" /> */}
                    <Button 
                      variant="outline" 
                      onClick={() => setShowAllTopStores(true)}
                      className="group bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 hover:bg-shopone-pink/10 dark:hover:bg-shopone-pink/20 transition-all"
                    >
                      Show More 
                      <ChevronDown className="h-4 w-4 ml-1 group-hover:translate-y-0.5 transition-transform" />
                    </Button>
                  </div>
                )}
              </div>
              
              <div className="my-10">
                <Separator className="bg-gradient-to-r from-shopone-purple/20 via-shopone-pink/30 to-shopone-purple/20 h-0.5 dark:from-shopone-purple/30 dark:via-shopone-pink/40 dark:to-shopone-purple/30" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-8 text-center dark:text-white">All Stores</h3>
            </>
          )}
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
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
