import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import "./index.css";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";
import Sidebar from "./Components/Sidebar";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import About from "./pages/About";
import BlogDetailsTotowala from "./Components/Blogs/Totowala_Blog";
import BlogDetailsSwachhBangla from "./Components/Blogs/SwachhBangla";
import BlogDetailsJustCheers from "./Components/Blogs/JustCheers";
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
            <Route path="/blog/totowala" element={<BlogDetailsTotowala />} />
            <Route
              path="/blog/just-cheers"
              element={<BlogDetailsJustCheers />}
            />
            <Route
              path="/blog/swachh-bangla"
              element={<BlogDetailsSwachhBangla />}
            />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
