import React from "react";
import {
  Cpu,
  Smartphone,
  ShieldCheck,
  MapPin,
  CreditCard,
  Database,
  Monitor,
} from "lucide-react";
import JustCheersPoster from "../../assets/images/justposter.jpg";
import JustCheersFlow from "../../assets/images/justcheersblog.png";

export default function BlogDetailsJustCheers() {
  return (
    <article className="blog-details active">
      {/* Header */}
      <header>
        <h2 className="h2 blog article-title">
          Under the Hood of JustCheers: A Modern MERN Stack App
        </h2>
      </header>

      {/* Poster */}
      <figure>
        <img
          src={JustCheersPoster}
          alt="JustCheers App Poster"
          id="poster-img"
          loading="lazy"
        />
      </figure>

      {/* Blog Content */}
      <section className="blog-content details-content">
        {/* About */}
        <h3 className="h3">About the Application</h3>
        <p className="blog-text">
          JustCheers is an advanced MERN stack e-commerce application designed
          for online alcohol and food delivery. With real-time order tracking,
          secure payments, and a powerful admin panel, it provides a complete
          ecosystem for both customers and administrators. Built with
          performance, scalability, and modern user experience in mind,
          JustCheers demonstrates how cutting-edge full-stack development can
          power a next-gen digital marketplace.
        </p>

        {/* Challenges Faced */}
        <h3 className="h3">Challenges Faced</h3>
        <ul className="problems-list">
          <li>
            <span className="icon-box">
              <MapPin size={18} />
            </span>
            Implementing real-time order tracking with accurate location
            services.
          </li>
          <li>
            <span className="icon-box">
              <CreditCard size={18} />
            </span>
            Integrating Stripe payment gateway with robust error handling.
          </li>
          <li>
            <span className="icon-box">
              <Smartphone size={18} />
            </span>
            Ensuring responsive UI across devices for seamless user experience.
          </li>
          <li>
            <span className="icon-box">
              <Cpu size={18} />
            </span>
            Managing complex global states (cart, authentication, orders).
          </li>
        </ul>

        {/* Solutions Implemented */}
        <h3 className="h3">Solutions Implemented</h3>
        <ul className="solutions-list">
          <li>
            <span className="icon-box">
              <ShieldCheck size={18} />
            </span>
            JWT authentication ensures secure user login and session management.
          </li>
          <li>
            <span className="icon-box">
              <MapPin size={18} />
            </span>
            PIN code API integration for auto-filling addresses enhances speed
            and accuracy.
          </li>
          <li>
            <span className="icon-box">
              <CreditCard size={18} />
            </span>
            Stripe payment gateway integrated with backend validation for smooth
            and secure transactions.
          </li>
          <li>
            <span className="icon-box">
              <Cpu size={18} />
            </span>
            Context API for global state, improving performance and reducing
            prop drilling.
          </li>
          <li>
            <span className="icon-box">
              <Smartphone size={18} />
            </span>
            Tailwind CSS ensures responsive, modern, and reusable components.
          </li>
        </ul>

        {/* Front-End Excellence */}
        <h3 className="h3">Front-End Excellence</h3>
        <p className="blog-text">
          The front end is powered by <strong>React.js</strong> with a
          component-driven architecture. <strong>Tailwind CSS</strong> provides
          fast, utility-first styling that adapts seamlessly to screen sizes.
          Navigation is handled by <strong>React Router DOM</strong>, ensuring a
          single-page application feel. To handle complex states such as
          authentication, shopping carts, and orders, the{" "}
          <strong>Context API</strong> offers a clean, lightweight solution.
        </p>

        {/* Backend & Database */}
        <h3 className="h3">Robust Backend & Database</h3>
        <p className="blog-text">
          The backend, built with <strong>Node.js</strong> and{" "}
          <strong>Express.js</strong>, manages API routes for user
          authentication, order processing, and payments.{" "}
          <strong>MongoDB</strong> provides flexible and efficient storage for
          user accounts, order histories, and product catalogs. Real-time
          updates are achieved through structured APIs, ensuring synchronization
          between the client and server.
        </p>

        {/* Full-Stack Integration */}
        <h3 className="h3">Full-Stack Integration</h3>
        <ul className="features-list">
          <li>
            🔒 <strong>Secure Authentication:</strong> JWT tokens for user
            login.
          </li>
          <li>
            📦 <strong>Ordering Flow:</strong> Cart → Address Autofill →
            Payment.
          </li>
          <li>
            💳 <strong>Stripe Payments:</strong> Smooth checkout with backend
            verification.
          </li>
          <li>
            📊 <strong>Admin Panel:</strong> Real-time order monitoring and
            management.
          </li>
          <li>
            📱 <strong>Responsive Design:</strong> Works seamlessly across
            mobile, tablet, and desktop.
          </li>
        </ul>

        {/* Tech Stack */}
        <h3 className="h3">Technology Stack</h3>
        <div className="tech-stack">
          <div className="tech-card">ReactJS</div>
          <div className="tech-card">Tailwind CSS</div>
          <div className="tech-card">React Router DOM</div>
          <div className="tech-card">Context API</div>
          <div className="tech-card">Node.js</div>
          <div className="tech-card">Express.js</div>
          <div className="tech-card">MongoDB</div>
          <div className="tech-card">JWT Authentication</div>
          <div className="tech-card">Stripe Payment Gateway</div>
          <div className="tech-card">PIN Code API</div>
        </div>

        {/* App Flow */}
        <h3 className="h3">Application Flow</h3>
        <figure>
          <img
            src={JustCheersFlow}
            alt="JustCheers App Flow"
            id="flow-img"
            loading="lazy"
          />
        </figure>

        {/* Conclusion */}
        <h3 className="h3">Conclusion</h3>
        <p className="blog-text">
          JustCheers brings together modern front-end frameworks, secure
          authentication, real-time backend APIs, and scalable data management
          into a single ecosystem. Despite challenges in payment integration,
          state management, and responsiveness, the app demonstrates how a
          MERN-stack solution can power a fully functional, scalable, and
          user-friendly e-commerce platform. It’s a blueprint for modern web
          applications that combine performance, usability, and business logic
          seamlessly.
        </p>
      </section>
    </article>
  );
}
