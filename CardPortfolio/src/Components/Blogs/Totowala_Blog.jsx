import React from "react";
import { MapPin, Smartphone, Route, Cpu } from "lucide-react";
import TotowalaPoster from "../../assets/images/totowala-ride.jpg";
import AppFlow from "../../assets/images/totowalaappflow.png"; // add a structure/flow image

export default function BlogDetailsTotowala() {
  return (
    <article className="blog-details active">
      <header>
        <h2 className="h2 blog article-title">
          Totowala: Redefining Local Rides
        </h2>
      </header>

      {/* Poster Image */}
      <figure className="">
        <img
          src={TotowalaPoster}
          alt="Totowala App Poster"
          id="poster-img"
          loading="lazy"
        />
      </figure>

      {/* App Description */}
      <section className="blog-content details-content">
        <h3 className="h3">About the Application</h3>
        <p className="blog-text">
          Totowala is a modern e-rickshaw booking app designed for urban
          commuters. Users simply enter their location, request a ride, and get
          matched with a nearby e-rickshaw driver. The rider confirms the trip
          using an OTP, ensuring safety and authenticity before the journey
          begins. With this app, eco-friendly mobility becomes simple, safe, and
          accessible.
        </p>

        {/* Problem Section */}
        <h3 className="h3">Challenges Faced</h3>
        <ul className="problems-list">
          <li>
            <span className="icon-box">
              <MapPin size={18} />
            </span>
            Inaccurate geo-location services in crowded areas.
          </li>
          <li>
            <span className="icon-box">
              <Route size={18} />
            </span>
            Difficulty in real-time ride tracking during network issues.
          </li>
          <li>
            <span className="icon-box">
              <Smartphone size={18} />
            </span>
            Need for a user-friendly and responsive UI across devices.
          </li>
        </ul>

        {/* Solution Section */}
        <h3 className="h3">Solutions Implemented</h3>
        <ul className="solutions-list">
          <li>
            <span className="icon-box">
              <Cpu size={18} />
            </span>
            Integrated Google Maps API with error handling for precise
            geo-location.
          </li>
          <li>
            <span className="icon-box">
              <Route size={18} />
            </span>
            Built real-time ride tracking with WebSockets and MongoDB updates.
          </li>
          <li>
            <span className="icon-box">
              <Smartphone size={18} />
            </span>
            Designed a responsive, modern UI using ReactJS and Tailwind css or
            React icon for icons. lazy loading.
          </li>
        </ul>

        {/* Tech Stack */}
        <h3 className="h3">Technology Stack</h3>
        <div className="tech-stack">
          <div className="tech-card">ReactJS</div>
          <div className="tech-card">ExpressJS</div>
          <div className="tech-card">MongoDB</div>
          <div className="tech-card">Node js</div>
          <div className="tech-card">React Helmet</div>
          <div className="tech-card">Google Maps API</div>
          <div className="tech-card">React Icon</div>
          <div className="tech-card">JavaScript Libraries</div>
        </div>

        {/* App Structure Image */}
        <h3 className="h3">Application Flow</h3>
        <figure className="">
          <img
            src={AppFlow}
            id="flow-img"
            alt="Totowala App Flow"
            loading="lazy"
          />
        </figure>
      </section>
    </article>
  );
}
