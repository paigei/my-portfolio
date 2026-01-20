export default function Art() {
    return (
      <section className="w-full px-6 py-16">
        {/* Header */}
        <div className="max-w-5xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Artworks
          </h1>
          <p className="text-gray-600 max-w-2xl">
            A collection of personal designs, experiments, and visual explorations.
            This space is for creativity without constraints.
          </p>
        </div>
  
        {/* Gallery */}
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Art Card */}
          <div className="group">
            <div className="aspect-square overflow-hidden rounded-xl bg-gray-100">
              <img
                src="https://via.placeholder.com/600"
                alt="Artwork title"
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-3 text-lg font-semibold text-gray-900">
              Artwork Title
            </h3>
            <p className="text-sm text-gray-600">
              Digital illustration · 2025
            </p>
          </div>
  
          {/* Repeat Card */}
          <div className="group">
            <div className="aspect-square overflow-hidden rounded-xl bg-gray-100">
              <img
                src="https://via.placeholder.com/600"
                alt="Artwork title"
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-3 text-lg font-semibold text-gray-900">
              Design Study
            </h3>
            <p className="text-sm text-gray-600">
              Poster / layout exploration
            </p>
          </div>
  
          <div className="group">
            <div className="aspect-square overflow-hidden rounded-xl bg-gray-100">
              <img
                src="https://via.placeholder.com/600"
                alt="Artwork title"
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-3 text-lg font-semibold text-gray-900">
              Visual Experiment
            </h3>
            <p className="text-sm text-gray-600">
              Mixed media
            </p>
          </div>
        </div>
      </section>
    );
  }
  