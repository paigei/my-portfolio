import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./pages/home";
import Projects from "./pages/projects";
import About from "./pages/about";
import Contact from "./pages/contact";
import Art from "./pages/art";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/art" element={<Art />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
