import { Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md'
          : 'bg-gradient-to-b from-rose-50/80 to-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 fade-in">
            <img
              src="/logo.png copy.png"
              alt="BangleBloom Logo"
              className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
            />
            <div className="flex flex-col">
              <h1 className="text-2xl sm:text-3xl font-serif text-rose-800 tracking-wide">
                BangleBloom
              </h1>
              <p className="text-xs text-rose-600 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Handcrafted with Love
              </p>
            </div>
          </div>
          <a
            href="#customize"
            className="hidden sm:block px-6 py-2.5 bg-gradient-to-r from-rose-400 to-rose-500 text-white rounded-full font-medium hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Customize Now
          </a>
        </div>
      </div>
    </header>
  );
}
