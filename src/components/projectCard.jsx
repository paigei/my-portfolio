export default function ProjectCard({ title, description, tech, link }) {
    return (
      <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
  
        {tech && (
          <p className="mt-2 text-sm text-gray-500">
            <span className="font-medium">Tech:</span> {tech}
          </p>
        )}
  
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-indigo-600 hover:underline"
        >
          View Project →
        </a>
      </div>
    );
  }
  