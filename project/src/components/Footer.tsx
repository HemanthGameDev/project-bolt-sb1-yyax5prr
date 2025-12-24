import { Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-rose-900 to-rose-950 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-3">
            <img
              src="/logo.png copy.png"
              alt="BangleBloom Logo"
              className="h-12 w-12 object-contain brightness-0 invert"
            />
            <h3 className="text-3xl font-serif">BangleBloom</h3>
          </div>

          <p className="flex items-center justify-center gap-2 text-rose-200 text-lg">
            <Sparkles className="w-5 h-5" />
            Handcrafted with love
            <Heart className="w-5 h-5 fill-rose-400 text-rose-400" />
          </p>


          <div className="border-t border-rose-800 pt-6 mt-6">
            <p className="text-rose-300 text-sm">
              © {new Date().getFullYear()} BangleBloom. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
