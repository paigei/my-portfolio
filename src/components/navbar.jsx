import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-2 bg-white shadow">
      <h1 className="text-lg font-bold text-gray-900">My Portfolio</h1>
      <ul className="flex gap-4 text-gray-700 font-medium">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/art">Art</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
