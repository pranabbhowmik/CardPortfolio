import React from "react";
import {
  Cpu,
  Smartphone,
  ShieldCheck,
  MapPin,
  CreditCard,
  Database,
  Monitor,
  Share2,
  Heart,
  Users,
} from "lucide-react";
import LynkloomPoster from "../../assets/images/lynkloom.jpg";
import LynkloomFlow from "../../assets/images/lynkloomFlow.png";

export default function BlogDetailsLynkloom() {
  return (
    <article className="blog-details active">
      {/* Header */}
      <header>
        <h2 className="h2 blog article-title">
          Lynkloom: NFC-Powered Smart Networking & Digital Connections
        </h2>
      </header>

      {/* Poster */}
      <figure>
        <img
          src={LynkloomPoster}
          alt="Lynkloom App Poster"
          id="poster-img"
          loading="lazy"
        />
      </figure>

      {/* Blog Content */}
      <section className="blog-content details-content">
        {/* About */}
        <h3 className="h3">About the Application</h3>
        <p className="blog-text">
          🚀 <strong>Lynkloom</strong> is transforming the way professionals
          connect by combining <strong>NFC-enabled smart business cards</strong>{" "}
          with a dynamic digital profile system. Instead of static visiting
          cards, users can instantly share their portfolio, social links, and
          contact details with a simple tap.
        </p>
        <p className="blog-text">
          The platform goes beyond networking—it empowers users with{" "}
          <strong>custom business card designs</strong>,{" "}
          <strong>social portfolio integration</strong>, and even a{" "}
          <strong>matchmaking service</strong> where meaningful personal and
          professional connections are made.
        </p>

        {/* Challenges Faced */}
        <h3 className="h3">Challenges Faced</h3>
        <ul className="problems-list">
          <li>
            <span className="icon-box">
              <Share2 size={18} />
            </span>
            Creating real-time profile sharing via NFC + QR across devices.
          </li>
          <li>
            <span className="icon-box">
              <Smartphone size={18} />
            </span>
            Designing customizable business cards with responsive previews.
          </li>
          <li>
            <span className="icon-box">
              <Users size={18} />
            </span>
            Managing large-scale portfolio links across multiple social apps.
          </li>
          <li>
            <span className="icon-box">
              <Heart size={18} />
            </span>
            Developing a reliable matchmaking system where real people meet life
            partners.
          </li>
          <li>
            <span className="icon-box">
              <Database size={18} />
            </span>
            Handling secure user data with scalability for thousands of
            profiles.
          </li>
        </ul>

        {/* Solutions Implemented */}
        <h3 className="h3">Solutions Implemented</h3>
        <ul className="solutions-list">
          <li>
            <span className="icon-box">
              <ShieldCheck size={18} />
            </span>
            NFC + QR integration for instant and secure profile sharing.
          </li>
          <li>
            <span className="icon-box">
              <Smartphone size={18} />
            </span>
            Custom card design system with live preview & ordering options.
          </li>
          <li>
            <span className="icon-box">
              <Cpu size={18} />
            </span>
            Social portfolio linking—users can attach GitHub, LinkedIn,
            Instagram, and more.
          </li>
          <li>
            <span className="icon-box">
              <Users size={18} />
            </span>
            Smart matchmaking algorithms based on shared interests and verified
            data.
          </li>
          <li>
            <span className="icon-box">
              <Monitor size={18} />
            </span>
            Secure API integrations with validation and error handling.
          </li>
        </ul>

        {/* Front-End Excellence */}
        <h3 className="h3">Front-End Excellence</h3>
        <p className="blog-text">
          The front-end was built with <strong>React.js</strong>,{" "}
          <strong>Tailwind CSS</strong>, and <strong>Framer Motion</strong> for
          dynamic UI and smooth animations. Every interaction—from scanning NFC
          to updating a profile—was optimized for speed and accessibility.
        </p>
        <p className="blog-text">
          We implemented responsive layouts, micro-interactions, and
          mobile-first design principles to ensure Lynkloom works seamlessly on
          smartphones, tablets, and desktops.
        </p>

        {/* Backend & Database */}
        <h3 className="h3">Robust Backend & Database</h3>
        <p className="blog-text">
          The backend leverages <strong>Node.js</strong> and{" "}
          <strong>Express.js</strong> to build scalable APIs for profile
          management, matchmaking, and orders. <strong>MongoDB</strong> stores
          user data, business card designs, and matchmaking records with secure
          schema validation.
        </p>
        <p className="blog-text">
          API integrations handle NFC + QR code generation, while authentication
          is managed through <strong>JWT tokens</strong> for secure access
          control.
        </p>

        {/* Full-Stack Integration */}
        <h3 className="h3">Full-Stack Integration</h3>
        <ul className="features-list">
          <li>
            🔒 <strong>Authentication:</strong> Secure JWT-based logins.
          </li>
          <li>
            📇 <strong>Business Cards:</strong> NFC + QR sharing with live
            design previews.
          </li>
          <li>
            🌐 <strong>Portfolio:</strong> Add unlimited social & professional
            links.
          </li>
          <li>
            ❤️ <strong>Matchmaking:</strong> AI-driven suggestions for personal
            connections.
          </li>
          <li>
            📊 <strong>Admin Dashboard:</strong> Manage users, designs, and
            orders.
          </li>
          <li>
            📱 <strong>Responsive UI:</strong> Works flawlessly across devices.
          </li>
        </ul>

        {/* Tech Stack */}
        <h3 className="h3">Technology Stack</h3>
        <div className="tech-stack">
          <div className="tech-card">ReactJS</div>
          <div className="tech-card">Tailwind CSS</div>
          <div className="tech-card">Framer Motion</div>
          <div className="tech-card">React Router DOM</div>
          <div className="tech-card">Node.js</div>
          <div className="tech-card">Express.js</div>
          <div className="tech-card">MongoDB</div>
          <div className="tech-card">JWT Authentication</div>
          <div className="tech-card">API Integrations</div>
          <div className="tech-card">NFC & QR Technology</div>
        </div>

        {/* App Flow */}
        <h3 className="h3">Application Flow</h3>
        <figure>
          <img
            src={LynkloomFlow}
            alt="Lynkloom App Flow"
            id="flow-img"
            loading="lazy"
          />
        </figure>

        {/* Learning Outcomes */}
        <h3 className="h3">Learning Outcomes</h3>
        <p className="blog-text">
          Working on Lynkloom strengthened my expertise in{" "}
          <strong>
            API integration, NFC/QR workflows, modular UI design, and secure
            authentication
          </strong>
          . I also gained hands-on experience in bridging social portfolio
          features with matchmaking services inside a single product.
        </p>

        {/* Future Enhancements */}
        <h3 className="h3">Future Enhancements</h3>
        <ul className="problems-list">
          <li>🛒 Integration of e-commerce for card orders & deliveries.</li>
          <li>🌍 AI-powered networking suggestions based on industries.</li>
          <li>📅 Calendar sync for scheduling meetings directly.</li>
          <li>🔔 Real-time notifications for profile views and matches.</li>
        </ul>

        {/* Conclusion */}
        <h3 className="h3">Conclusion</h3>
        <p className="blog-text">
          Lynkloom is more than a business card replacement—it’s a{" "}
          <strong>digital networking ecosystem</strong>. With NFC-powered smart
          sharing, portfolio integration, and unique matchmaking features, it
          redefines how people connect professionally and personally. This
          project reflects how modern full-stack applications can create
          meaningful impact in both business and life.
        </p>
      </section>
    </article>
  );
}
