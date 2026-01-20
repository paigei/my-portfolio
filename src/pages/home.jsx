export default function Home() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-white via-indigo-50 to-purple-100">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
          Hi, I’m <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Paige Inoue</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-700">
          A computer science student & hobby artist exploring{" "}
          <span className="font-semibold">web development</span>,{" "}
          <span className="font-semibold">AI</span>, and{" "}
          <span className="font-semibold">graphic design</span>.
        </p>

        <div className="flex gap-4 mt-8">
          <a
            href="/projects"
            className="px-6 py-3 text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-800"
          >
            View My Work
          </a>
          <a
            href="/about"
            className="px-6 py-3 text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* About / Image Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 py-16 max-w-6xl mx-auto">
        {/* Text Side */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I love solving problems with code and expressing ideas through art.
            Whether it’s building{" "}
            <span className="font-semibold">web applications</span> or painting
            abstract landscapes, I aim to bring creativity and structure
            together.
          </p>
        </div>

        {/* Image Side */}
        <div className="flex justify-center">
          <div className="w-64 h-64 rounded-2xl shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/400"
              alt="Placeholder artwork"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="px-6 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Featured Work
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {/* Project Card */}
          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900">Cool Project</h3>
            <p className="mt-2 text-gray-600">
              A short description of a CS project.
            </p>
          </div>

          {/* Art Card */}
          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900">Artwork Title</h3>
            <p className="mt-2 text-gray-600">
              A quick blurb about one of your art projects.
            </p>
          </div>

          {/* Another Placeholder */}
          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900">Experiment</h3>
            <p className="mt-2 text-gray-600">
              Space for either art or CS experiment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
