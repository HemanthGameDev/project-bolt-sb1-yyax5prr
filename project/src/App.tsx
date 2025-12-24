import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Customization from './components/Customization';
import Gallery from './components/Gallery';
import PaymentInfo from './components/PaymentInfo';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'BangleBloom - Design Bangles Your Way';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in, .fade-in-delay, .fade-in-delay-2').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Customization />
      <Gallery />
      <PaymentInfo />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
