import React from 'react';
import { Send, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TelegramPopupProps {
  onClose: () => void;
}

const TelegramPopup = ({ onClose }: TelegramPopupProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </button>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="flex flex-col items-center text-center">
            {/* Icon */}
            <div className="mb-6 p-4 rounded-full bg-gradient-to-r from-[#0088cc] to-[#00a2ff]">
              <Send className="h-8 w-8 text-white" />
            </div>

            {/* Text content */}
            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
              Don't Miss Out on Amazing Deals! 🎉
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join our Telegram channel to get instant notifications for exclusive discounts, flash sales, and the best shopping deals!
            </p>

            {/* Benefits list */}
            <div className="w-full mb-6 space-y-3">
              <div className="flex items-center text-gray-700 dark:text-gray-200">
                <span className="mr-2">✨</span>
                <span>Real-time deal alerts</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-200">
                <span className="mr-2">🔥</span>
                <span>Exclusive discount codes</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-200">
                <span className="mr-2">⚡</span>
                <span>Flash sale notifications</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              onClick={() => window.open('https://dub.sh/shopone-telegram', '_blank')}
              className="w-full bg-gradient-to-r from-[#0088cc] to-[#00a2ff] text-white hover:opacity-90 transition-opacity"
            >
              Join Telegram Channel
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelegramPopup; 