export default function Navbar() {
    return (
      <nav className="flex justify-between p-4 bg-white shadow">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <ul className="flex gap-4">
          <li><a href="/">Home</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    );
  }
  