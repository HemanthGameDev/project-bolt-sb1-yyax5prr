export default function Gallery() {
  const galleryImages = [
    {
      src: '/bangle-floral.jpg copy.jpg',
      title: 'Floral Collection',
      description: 'Delicate floral patterns',
    },
    {
      src: '/bangle-preview.jpg copy.jpg',
      title: 'Classic Elegance',
      description: 'Timeless traditional designs',
    },
    {
      src: '/gallery-bangles.jpg copy.jpg',
      title: 'Contemporary Mix',
      description: 'Modern meets traditional',
    },
    {
      src: '/hero-bangles.jpg copy.jpg',
      title: 'Vibrant Collection',
      description: 'Colorful statement pieces',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl sm:text-5xl font-serif text-rose-900 mb-4">
            Our Beautiful Designs
          </h2>
          <p className="text-lg text-rose-700 max-w-2xl mx-auto">
            Handpicked collections to inspire your custom creation
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-rose-50 to-amber-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 via-rose-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-1">{image.title}</h3>
                  <p className="text-rose-100 text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
