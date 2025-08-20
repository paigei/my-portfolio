export default function Home() {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gray-50">
        {/* Hero / Intro */}
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Hi, I’m <span className="text-indigo-600">Paige Inoue</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            I’m a computer science student passionate about building projects in{" "}
            <span className="font-medium">web development</span>,{" "}
            <span className="font-medium">AI</span>, and{" "}
            <span className="font-medium">software design</span>.
          </p>
        </div>
  
        {/* Call to Action */}
        <div className="flex gap-4 mt-8">
          <a
            href="/projects"
            className="px-6 py-3 text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-700"
          >
            View My Projects
          </a>
          <a
            href="/about"
            className="px-6 py-3 text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50"
          >
            About Me
          </a>
        </div>
  
        {/* Quick Project Teaser */}
        <div className="w-full max-w-4xl mt-16">
          <h2 className="mb-6 text-2xl font-semibold text-gray-800">
            Featured Project
          </h2>
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-900">Project Title</h3>
            <p className="mt-2 text-gray-600">
              Short one-liner about what this project does. Maybe include the
              technologies you used (React, Python, etc.).
            </p>
            <a
              href="/projects"
              className="inline-block mt-4 text-indigo-600 hover:underline"
            >
              See more →
            </a>
          </div>
        </div>
      </section>
    );
  }
  