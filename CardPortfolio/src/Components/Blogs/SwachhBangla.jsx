import React from "react";
import {
  MapPin,
  Camera,
  Bell,
  Cpu,
  Award,
  Users,
  ShieldCheck,
  Recycle,
} from "lucide-react";
import SwachhPoster from "../../assets/images/swachhbangla.jpg";
import SwachhFlow from "../../assets/images/swachhblog.png";

export default function BlogDetailsSwachhBangla() {
  return (
    <article className="blog-details active">
      {/* Header */}
      <header>
        <h2 className="h2 blog article-title">
          Swachh Bangla: A Smarter Way to Keep Cities Clean
        </h2>
      </header>

      {/* Poster */}
      <figure>
        <img
          src={SwachhPoster}
          alt="Swachh Bangla App Poster"
          id="poster-img"
          loading="lazy"
        />
      </figure>

      {/* Blog Content */}
      <section className="blog-content details-content">
        {/* About */}
        <h3 className="h3">About the Application</h3>
        <p className="blog-text">
          Swachh Bangla is a community-powered garbage reporting application
          built to make cities cleaner and healthier. It connects citizens,
          government officials, and waste collectors into a single transparent
          ecosystem. Users can quickly report garbage with a photo and GPS
          location. Officials then assign collectors who resolve the issue and
          upload proof of completion. To encourage participation, users earn
          redeemable coins for every successful report.
        </p>

        {/* Problem Section */}
        <h3 className="h3">Challenges Faced</h3>
        <ul className="problems-list">
          <li>
            <span className="icon-box">
              <MapPin size={18} />
            </span>
            Lack of accurate reporting channels for garbage issues.
          </li>
          <li>
            <span className="icon-box">
              <Camera size={18} />
            </span>
            No visual proof of whether garbage was collected.
          </li>
          <li>
            <span className="icon-box">
              <Bell size={18} />
            </span>
            Citizens not notified when tasks are completed.
          </li>
          <li>
            <span className="icon-box">
              <Users size={18} />
            </span>
            Weak community involvement in maintaining cleanliness.
          </li>
          <li>
            <span className="icon-box">
              <Recycle size={18} />
            </span>
            No tracking of waste disposal or recycling progress.
          </li>
        </ul>

        {/* Solution Section */}
        <h3 className="h3">Solutions Implemented</h3>
        <ul className="solutions-list">
          <li>
            <span className="icon-box">
              <Cpu size={18} />
            </span>
            Integrated GPS and photo uploads for reliable reporting.
          </li>
          <li>
            <span className="icon-box">
              <Camera size={18} />
            </span>
            Mandatory before-and-after photos from collectors ensure
            accountability.
          </li>
          <li>
            <span className="icon-box">
              <Award size={18} />
            </span>
            Reward system with redeemable coins motivates user participation.
          </li>
          <li>
            <span className="icon-box">
              <ShieldCheck size={18} />
            </span>
            Transparent dashboard for officers to monitor reports and actions.
          </li>
          <li>
            <span className="icon-box">
              <Recycle size={18} />
            </span>
            Data tracking helps analyze waste collection and recycling
            statistics.
          </li>
        </ul>

        {/* Features */}
        <h3 className="h3">Key Features</h3>
        <ul className="features-list">
          <li>📍 Location-based garbage reporting with GPS accuracy.</li>
          <li>📸 Photo proof submission for both citizens and collectors.</li>
          <li>🔔 Instant notifications for task status updates.</li>
          <li>👥 Community-driven reporting and participation.</li>
          <li>🏆 Reward coins system to encourage regular usage.</li>
          <li>📊 Government dashboard for monitoring cleanliness trends.</li>
          <li>♻️ Recycling and disposal tracking for sustainability.</li>
        </ul>

        {/* Tech Stack */}
        <h3 className="h3">Technology Stack</h3>
        <div className="tech-stack">
          <div className="tech-card">ReactJS</div>
          <div className="tech-card">ExpressJS</div>
          <div className="tech-card">MongoDB</div>
          <div className="tech-card">Node.js</div>
          <div className="tech-card">React Helmet</div>
          <div className="tech-card">GPS & Camera APIs</div>
          <div className="tech-card">Cloud Storage</div>
          <div className="tech-card">Notification System</div>
          <div className="tech-card">Data Analytics</div>
        </div>

        {/* Impact Section */}
        <h3 className="h3">Impact on the Community</h3>
        <p className="blog-text">
          Swachh Bangla creates a sense of responsibility among citizens while
          holding officials and collectors accountable. By combining technology,
          transparency, and rewards, the app transforms garbage management into
          an engaging community effort. Over time, it reduces littering,
          improves recycling rates, and makes cities cleaner and more
          sustainable.
        </p>

        {/* App Flow */}
        <h3 className="h3">Application Flow</h3>
        <figure>
          <img
            src={SwachhFlow}
            alt="Swachh Bangla App Flow"
            id="flow-img"
            loading="lazy"
          />
        </figure>
      </section>
    </article>
  );
}
