import React from "react";
import { Book, BriefcaseBusiness } from "lucide-react"; // using lucide-react icons (lightweight)

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
      title: " Associate Software Engineer",
      company: "Valourithm Technologies",
      year: "Jan 2025 — Present",
      desc: "Mern Stack Developer at Valourithm Technologies, building dynamic web applications with React, Next.js, Node.js, and Mysql, ensuring seamless user experiences.",
    },
    {
      title: "Reactjs Developer",
      company: "Kalpyaan Technology",
      year: "Nov 2024 — Jan 2025",
      desc: "Engineered web applications with React.js, Tailwind CSS, and Redux, improving performance efficiency by 15%. Collaborated with cross-functional teams, reducing feature deployment cycles by 10%.",
    },
    {
      title: "Web Developer",
      company: "Insu Creation",
      year: "May 2024 — Oct 2024",
      desc: "Web Developer Intern at Insucreation, crafting dynamic websites with HTML, CSS, and JavaScript.",
    },
  ];

  // Skills Data
  const skills = [
    { title: "Web Design", value: 80 },
    { title: "Graphic Design", value: 70 },
    { title: "Branding", value: 90 },
    { title: "WordPress", value: 50 },
  ];

  return (
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
      {/* Skills Section */}
      {/* <section className="skill">
        <h3 className="h3 skills-title">My Skills</h3>

        <ul className="skills-list content-card">
          {skills.map((skill, idx) => (
            <li className="skills-item" key={idx}>
              <div className="title-wrapper">
                <h5 className="h5">{skill.title}</h5>
                <data value={skill.value}>{skill.value}%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: `${skill.value}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </section> */}
    </article>
  );
}
