import { MessageCircle, Phone } from 'lucide-react';

export default function Contact() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917995973123', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-rose-100 via-pink-100 to-amber-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,182,193,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,218,185,0.3),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="fade-in">
            <h2 className="text-4xl sm:text-5xl font-serif text-rose-900 mb-6">
              Let's Create Something Beautiful
            </h2>
            <p className="text-xl text-rose-700 mb-8">
              Have questions or ready to order? Chat with us on WhatsApp
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl fade-in-delay">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Phone className="w-6 h-6 text-rose-600" />
              <a
                href="tel:+917995973123"
                className="text-2xl sm:text-3xl font-bold text-rose-900 hover:text-rose-600 transition-colors"
              >
                +91 7995973123
              </a>
            </div>

            <button
              onClick={handleWhatsAppClick}
              className="group w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-bold text-xl flex items-center justify-center gap-3 hover:scale-105 hover:shadow-2xl transition-all duration-300 pulse-slow mx-auto"
            >
              <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform" />
              Chat on WhatsApp
            </button>

            <p className="mt-6 text-rose-600 text-sm">
              We typically respond within minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
