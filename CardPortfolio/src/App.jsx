import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./Components/Navbar";
import "./index.css";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";
import Sidebar from "./Components/Sidebar";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
function App() {
  return (
    <Router>
      <main>
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
