import ProjectCard from "../components/projectCard";

export default function Projects() {
  return (
    <section className="min-h-screen px-6 py-12 bg-gray-50">
      {/* Page Title */}
      <h2 className="text-3xl font-bold text-gray-900 mb-8">My Projects</h2>

      {/* Grid of Project Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="Portfolio Website"
          description="A personal site built with React, Vite, and Tailwind CSS."
          tech="React, Vite, Tailwind"
          link="https://github.com/yourusername/portfolio"
        />
        <ProjectCard
          title="Pathfinding Visualizer"
          description="An A* algorithm visualizer for exploring shortest paths in a grid."
          tech="Python, Pygame"
          link="https://github.com/yourusername/pathfinding"
        />
        <ProjectCard
          title="Anime Finder"
          description="A web app that fetches anime data from the Jikan API."
          tech="React, REST API"
          link="https://github.com/yourusername/anime-finder"
        />
      </div>
    </section>
  );
}
