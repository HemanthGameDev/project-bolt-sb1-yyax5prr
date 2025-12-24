import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToCustomize = () => {
    document.getElementById('customize')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-amber-50 to-pink-50 -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6 fade-in">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-rose-900 leading-tight">
              Design Bangles
              <span className="block text-amber-600">Your Way</span>
            </h2>
            <p className="text-lg sm:text-xl text-rose-700 max-w-xl mx-auto lg:mx-0">
              Choose color, size & design – made just for you with traditional craftsmanship and modern elegance
            </p>
            <button
              onClick={scrollToCustomize}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-semibold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              Customize Now
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          <div className="relative fade-in-delay">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-300/20 to-amber-300/20 rounded-3xl blur-3xl" />
            <img
              src="/hero-bangles.jpg copy.jpg"
              alt="Beautiful handcrafted bangles"
              className="relative rounded-3xl shadow-2xl w-full object-cover max-h-[600px]"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full blur-2xl opacity-50" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full blur-2xl opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
