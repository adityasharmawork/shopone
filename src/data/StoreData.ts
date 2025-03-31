
import { Store } from '../components/StoreCard';

export const storeData: Store[] = [
  {
    id: '1',
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png',
    url: 'https://www.amazon.com',
    categories: ['General', 'Electronics', 'Fashion', 'Home', 'Health & Fitness'],
    description: 'Online shopping from the earth\'s biggest selection'
  },
  {
    id: '2',
    name: 'Flipkart',
    logo: 'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png',
    url: 'https://www.flipkart.com',
    categories: ['General', 'Electronics', 'Fashion', 'Health & Fitness'],
    description: 'India\'s leading e-commerce marketplace'
  },
  {
    id: '3',
    name: 'Myntra',
    logo: 'https://entrackr.com/storage/2022/12/Myntra-800x400.jpg',
    url: 'https://www.myntra.com',
    categories: ['Fashion', 'Beauty'],
    description: 'Online shopping for Fashion & Lifestyle in India'
  },
  {
    id: '4',
    name: 'Nykaa',
    logo: 'https://logos-world.net/wp-content/uploads/2022/01/Nykaa-Logo.png',
    url: 'https://www.nykaa.com',
    categories: ['Beauty', 'Fashion'],
    description: 'Beauty and wellness products'
  },
  {
    id: '5',
    name: 'Ajio',
    logo: 'https://asset.brandfetch.io/idQFSyg0Nm/idoDxML3jk.png',
    url: 'https://www.ajio.com',
    categories: ['Fashion'],
    description: 'Curated fashion at its best'
  },
  {
    id: '6',
    name: 'eBay',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/2560px-EBay_logo.svg.png',
    url: 'https://www.ebay.com',
    categories: ['General', 'Electronics'],
    description: 'The original online marketplace'
  },
  {
    id: '7',
    name: 'Best Buy',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Best_Buy_Logo.svg/1280px-Best_Buy_Logo.svg.png',
    url: 'https://www.bestbuy.com',
    categories: ['Electronics'],
    description: 'Consumer electronics retail chain'
  },
  {
    id: '8',
    name: 'Walmart',
    logo: 'https://cdn.mos.cms.futurecdn.net/5StAbRcY2yimE4rwpicEAg.jpg',
    url: 'https://www.walmart.com',
    categories: ['General', 'Home', 'Health & Fitness'],
    description: 'Save Money. Live Better.'
  },
  {
    id: '9',
    name: 'Etsy',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Etsy_logo.svg/2560px-Etsy_logo.svg.png',
    url: 'https://www.etsy.com',
    categories: ['Home', 'Fashion'],
    description: 'Handmade items and craft supplies'
  },
  {
    id: '10',
    name: 'Wayfair',
    logo: 'https://logosarchive.com/wp-content/uploads/2021/12/Wayfair-logo.svg',
    url: 'https://www.wayfair.com',
    categories: ['Home'],
    description: 'Furniture and home goods'
  },
  {
    id: '11',
    name: 'Sephora',
    logo: 'https://1000logos.net/wp-content/uploads/2017/03/Sephora-Logo-2011.jpg',
    url: 'https://www.sephora.com',
    categories: ['Beauty'],
    description: 'Cosmetics, beauty products, and fragrances'
  },
  {
    id: '12',
    name: 'Newegg',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Newegg_logo.svg',
    url: 'https://www.newegg.com',
    categories: ['Electronics'],
    description: 'Computer parts, PC components, and tech'
  },
  {
    id: '13',
    name: 'Cult.fit',
    logo: 'https://www.logotaglines.com/wp-content/uploads/2021/07/CULT-FIT-Logo-Tagline-Slogan-Amblem.jpg',
    url: 'https://www.cult.fit',
    categories: ['Health & Fitness'],
    description: 'Fitness gear and workout apparel'
  },
  {
    id: '14',
    name: 'Decathlon',
    logo: 'https://logos-world.net/wp-content/uploads/2020/11/Decathlon-Logo.png',
    url: 'https://www.decathlon.com',
    categories: ['Health & Fitness', 'Fashion'],
    description: 'Sports equipment and athletic wear'
  }
];

export const getCategories = (): string[] => {
  const categoriesSet = new Set<string>();
  
  storeData.forEach(store => {
    store.categories.forEach(category => {
      if (category !== 'Handmade') { // Exclude Handmade category
        categoriesSet.add(category);
      }
    });
  });
  
  return Array.from(categoriesSet);
};
