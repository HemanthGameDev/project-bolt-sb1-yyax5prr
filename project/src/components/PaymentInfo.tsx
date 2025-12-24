import { CreditCard, ShieldCheck, MessageSquare } from 'lucide-react';

export default function PaymentInfo() {
  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl sm:text-5xl font-serif text-rose-900 mb-4">
              Simple & Secure Payment
            </h2>
            <p className="text-lg text-rose-700">
              Your trust is our priority
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center fade-in">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-rose-900 mb-2">
                Online Payment
              </h3>
              <p className="text-rose-700">
                Secure digital payment options available
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center fade-in-delay">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-rose-900 mb-2">
                100% Safe
              </h3>
              <p className="text-rose-700">
                Your information is protected and secure
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center fade-in-delay-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-rose-900 mb-2">
                Easy Process
              </h3>
              <p className="text-rose-700">
                Payment details shared after order confirmation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
