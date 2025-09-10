import React, { useState } from "react";
import justcheers from "../assets/images/justcheers.png";
import totowala from "../assets/images/totowala.png";
import OVS from "../assets/images/ovs.png";
import saregamapa from "../assets/images/saregamapa.png";
import goppo from "../assets/images/goppo.png";
import swachh from "../assets/images/swachhbangla.png";
import blog from "../assets/images/freexpress.png";
import genname from "../assets/images/name.png";
import enchanting from "../assets/images/enchenting.png";
import { Eye } from "lucide-react";
import ProjectSeo from "../Components/Seo/ProjectSeo";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      id: 1,
      title: "JustCheers",
      category: "Ecommerce Application",
      image: justcheers,
      link: "https://just-cheers.onrender.com/",
    },
    {
      id: 2,
      title: "Totowala",
      category: "Applications",
      image: totowala,
      link: "https://toto-wala.onrender.com/",
    },
    {
      id: 3,
      title: "Swachh Bangla",
      category: "Applications",
      image: swachh,
      link: "https://swachh-bangla.onrender.com/",
    },
    {
      id: 4,
      title: "FreeXpress",
      category: "Applications",
      image: blog,
      link: "https://freexpress.onrender.com/",
    },
    {
      id: 5,
      title: "Online Voting System",
      category: "Web development",
      image: OVS,
      link: "https://online-votting-system.onrender.com/",
    },
    {
      id: 6,
      title: "Goppo",
      category: "Applications",
      image: goppo,
      link: "https://missu-ylqn.onrender.com/",
    },
    {
      id: 7,
      title: "Saregamapa",
      category: "Web development",
      image: saregamapa,
      link: "https://saregamapadha.netlify.app/",
    },
    {
      id: 8,
      title: "GenName AI",
      category: "Applications",
      image: genname,
      link: "https://gennameai.onrender.com/",
    },
    {
      id: 9,
      title: "Enchanting Pets",
      category: "Ecommerce Application",
      image: enchanting,
      link: "https://www.enchantingpets.com/",
    },
  ];

  // Filtered projects
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const categories = [
    "All",
    "Ecommerce Application",
    "Applications",
    "Web development",
  ];

  return (
    <>
      <ProjectSeo />
      <article className="portfolio active" data-page="portfolio">
        <header>
          <h2 className="h2 article-title">Projects</h2>
        </header>

        <section className="projects">
          {/* Category buttons */}
          <ul className="filter-list">
            {categories.map((cat) => (
              <li className="filter-item" key={cat}>
                <button
                  className={selectedCategory === cat ? "active" : ""}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>

          {/* Projects */}
          <ul className="project-list">
            {filteredProjects.map((project) => (
              <li className="project-item active" key={project.id}>
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <Eye size={20} className="eyeicon" />
                    </div>
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />
                  </figure>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
}
