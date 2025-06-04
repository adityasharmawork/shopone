import React from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TelegramBanner = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0088cc] to-[#00a2ff] p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
      {/* Decorative elements */}
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10"></div>
      <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-white/10"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center text-white">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
          <Send className="h-8 w-8" />
        </div>
        
        <h3 className="mb-2 text-2xl font-bold">Join Our Telegram Channel!</h3>
        <p className="mb-6 max-w-md text-white/90">
          Get instant notifications for the best deals, exclusive discounts, and flash sales. Never miss out on amazing shopping opportunities!
        </p>
        
        <Button
          onClick={() => window.open('https://dub.sh/shopone-telegram', '_blank')}
          className="group bg-white text-[#0088cc] hover:bg-white/90"
        >
          Join Now
          <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

export default TelegramBanner; 