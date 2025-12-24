import { useState } from 'react';
import { MessageCircle, Palette, Ruler, Sparkles, ShoppingBag } from 'lucide-react';

interface CustomizationOptions {
  color: string;
  size: string;
  design: string;
  quantity: number;
}

export default function Customization() {
  const [options, setOptions] = useState<CustomizationOptions>({
    color: 'Rose Pink',
    size: 'Medium (2.4)',
    design: 'Floral',
    quantity: 2,
  });

  const [previewImage, setPreviewImage] = useState('/bangle-floral.jpg copy.jpg');

  const colors = ['Rose Pink', 'Gold', 'Mint Green', 'Sky Blue', 'Lavender', 'Pearl White'];
  const sizes = ['Small (2.2)', 'Medium (2.4)', 'Large (2.6)', 'Extra Large (2.8)'];
  const designs = ['Classic', 'Floral', 'Pearl', 'Traditional', 'Contemporary'];

  const handleDesignChange = (design: string) => {
    setOptions({ ...options, design });
    if (design === 'Floral') {
      setPreviewImage('/bangle-floral.jpg copy.jpg');
    } else if (design === 'Pearl') {
      setPreviewImage('/bangle-preview.jpg copy.jpg');
    } else if (design === 'Traditional') {
      setPreviewImage('/bangles-traditional.jpg.jpg');
    } else if (design === 'Contemporary') {
      setPreviewImage('/bangles-contemporary.jpg.jpg');
    } else {
      setPreviewImage('/gallery-bangles.jpg copy.jpg');
    }
  };

  const handleWhatsAppOrder = () => {
    const message = `Hi! I'd like to order custom bangles with the following details:

Color: ${options.color}
Size: ${options.size}
Design: ${options.design}
Quantity: ${options.quantity}

Please share the pricing and availability. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917995973123?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="customize" className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl sm:text-5xl font-serif text-rose-900 mb-4">
            Create Your Perfect Bangles
          </h2>
          <p className="text-lg text-rose-700 max-w-2xl mx-auto">
            Customize every detail to match your style and preference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div className="relative fade-in-delay">
            <div className="sticky top-24">
              <div className="bg-gradient-to-br from-rose-100 to-amber-100 rounded-3xl p-8 shadow-xl">
                <img
                  src={previewImage}
                  alt="Bangle Preview"
                  className="w-full rounded-2xl shadow-lg transition-all duration-500"
                  key={previewImage}
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 fade-in-delay-2">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <label className="flex items-center gap-2 text-rose-900 font-semibold mb-4">
                <Palette className="w-5 h-5 text-rose-500" />
                Choose Color
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setOptions({ ...options, color })}
                    className={`px-4 py-3 rounded-xl font-medium transition-all ${
                      options.color === color
                        ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-md scale-105'
                        : 'bg-rose-50 text-rose-700 hover:bg-rose-100'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <label className="flex items-center gap-2 text-rose-900 font-semibold mb-4">
                <Ruler className="w-5 h-5 text-rose-500" />
                Select Size
              </label>
              <div className="grid grid-cols-2 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setOptions({ ...options, size })}
                    className={`px-4 py-3 rounded-xl font-medium transition-all ${
                      options.size === size
                        ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-md scale-105'
                        : 'bg-rose-50 text-rose-700 hover:bg-rose-100'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <label className="flex items-center gap-2 text-rose-900 font-semibold mb-4">
                <Sparkles className="w-5 h-5 text-rose-500" />
                Pick Design
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {designs.map((design) => (
                  <button
                    key={design}
                    onClick={() => handleDesignChange(design)}
                    className={`px-4 py-3 rounded-xl font-medium transition-all ${
                      options.design === design
                        ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-md scale-105'
                        : 'bg-rose-50 text-rose-700 hover:bg-rose-100'
                    }`}
                  >
                    {design}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <label className="flex items-center gap-2 text-rose-900 font-semibold mb-4">
                <ShoppingBag className="w-5 h-5 text-rose-500" />
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setOptions({ ...options, quantity: Math.max(1, options.quantity - 1) })}
                  className="w-12 h-12 bg-rose-100 hover:bg-rose-200 text-rose-700 rounded-xl font-bold transition-colors"
                >
                  -
                </button>
                <span className="text-3xl font-bold text-rose-900 min-w-[60px] text-center">
                  {options.quantity}
                </span>
                <button
                  onClick={() => setOptions({ ...options, quantity: Math.min(20, options.quantity + 1) })}
                  className="w-12 h-12 bg-rose-100 hover:bg-rose-200 text-rose-700 rounded-xl font-bold transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleWhatsAppOrder}
              className="w-full py-5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:scale-105 hover:shadow-2xl transition-all duration-300 pulse-slow"
            >
              <MessageCircle className="w-6 h-6" />
              Order via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
