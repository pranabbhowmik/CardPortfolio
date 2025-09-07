import React from "react";
import frontend from "../assets/images/icon-frontend.svg";
import backend from "../assets/images/icon-dev.svg";
import mobile from "../assets/images/icon-app.svg";
import api from "../assets/images/icon-api.svg";
const services = [
  {
    icon: frontend,
    alt: "design icon",
    title: "Frontend Development",
    text: "Designing and developing responsive, modern, and user-friendly interfaces with React.js, Tailwind CSS, and Next.js.",
  },
  {
    icon: backend,
    alt: "Backend Development icon",
    title: "Backend Development",
    text: "Building secure and scalable server-side applications with Node.js, Express.js, and MongoDB.",
  },
  {
    icon: mobile,
    alt: "mobile app icon",
    title: "Application Development",
    text: "Developing full-stack web applications with authentication, payments, and real-time features.",
  },
  {
    icon: api,
    alt: "API Integration icon",
    title: "API Integration",
    text: "Connecting applications with third-party APIs for maps, payments, messaging, and more.",
  },
];

export default function Service() {
  return (
    <section className="service">
      <h3 className="h3 service-title">What I'm Doing</h3>

      <ul className="service-list">
        {services.map((service, index) => (
          <li className="service-item" key={index}>
            <div className="service-icon-box">
              <img src={service.icon} alt={service.alt} width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">{service.title}</h4>
              <p className="service-item-text">{service.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
