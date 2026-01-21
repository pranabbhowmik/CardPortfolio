import React from "react";
import { Book, BriefcaseBusiness } from "lucide-react"; // using lucide-react icons (lightweight)
import ResumeSeo from "../Components/Seo/ResumeSeo";
import GithubContributions from "../Components/GithubContributions";
import Clients from "../Components/Clients";
export default function Resume() {
  // Education Data
  const education = [
    {
      title: "Bengal Institute of Technology and Management Santiniketan",
      year: "2021 — 2025",
      desc: "During my college years, I developed strong technical skills, built lifelong friendships, and seized countless learning opportunities that shaped my future path.",
    },
    {
      title: "Simulia C.K Vidyapith",
      year: "2013 — 2021",
      desc: "During my school days, I loved playing cricket with friends, while singing was a cherished hobby. Both activities helped me relax and stay focused, creating many memorable moments...",
    },
    {
      title: "Simulia Joykrishnapur Vivekananda Sishu Shiksha Niketan",
      year: "2007 — 2012",
      desc: "Completed Nursery to 4th grade at Simulia-Joykrishnapur Vivekananda Sishu Shiksha Niketan, gaining a solid academic base and essential personal values.",
    },
  ];

  // Experience Data
  const experience = [
    {
      title: "Software Developer",
      company: "Trans Global Geomatics Pvt Ltd",
      year: "Nov 2025 — Present",
      desc: "Software Developer at Trans Global Geomatics Pvt. Ltd., working on the Government of West Bengal’s VLTS (Vehicle Location Tracking System) project. Developing real-time vehicle tracking and map-based applications using React.js and Leaflet.js, and building efficient backend APIs with Python (FastAPI) to support live GPS data, system performance, and reliability.",
    },
    {
      title: " Associate Software Engineer",
      company: "Valourithm Technologies",
      year: "Jan 2025 — May 2026",
      desc: "Mern Stack Developer at Valourithm Technologies, building dynamic web applications with React, Next.js, Node.js, and Mysql, ensuring seamless user experiences.",
    },
    {
      title: "Reactjs Developer",
      company: "Kalpyaan Technology",
      year: "Nov 2024 — Jan 2025",
      desc: "Engineered web applications with React.js, Tailwind CSS, and Redux, improving performance efficiency by 15%. Collaborated with cross-functional teams, reducing feature deployment cycles by 10%.",
    },
  ];

  return (
    <>
      <ResumeSeo />
      <article className="resume active" data-page="resume">
        {" "}
        {/* Added 'active' */}
        {/* Header */}
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>
        {/* Education Section */}
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <Book size={20} />
            </div>
            <h3 className="h3">Education</h3>
          </div>

          <ol className="timeline-list">
            {education.map((item, idx) => (
              <li className="timeline-item" key={idx}>
                <h4 className="h4 timeline-item-title">{item.title}</h4>
                <span>{item.year}</span>
                <p className="timeline-text">{item.desc}</p>
              </li>
            ))}
          </ol>
        </section>
        {/* Experience Section */}
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <BriefcaseBusiness size={20} />
            </div>
            <h3 className="h3">Experience</h3>
          </div>

          <ol className="timeline-list">
            {experience.map((item, idx) => (
              <li className="timeline-item" key={idx}>
                <h4 className="h4 timeline-item-title">{item.title}</h4>
                <span>{item.company}</span>
                <p className="timeline-text">{item.year}</p>

                <p className="timeline-text">{item.desc}</p>
              </li>
            ))}
          </ol>
        </section>
        <Clients />
      </article>
    </>
  );
}
