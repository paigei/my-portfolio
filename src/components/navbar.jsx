import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-white shadow">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <ul className="flex gap-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
