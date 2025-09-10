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
import PetsPoster from "../../assets/images/enchantingblog.jpg";
import PetsFlow from "../../assets/images/enchentingpetappflow.png";

export default function BlogDetailsEnchantingPets() {
  return (
    <article className="blog-details active">
      {/* Header */}
      <header>
        <h2 className="h2 blog article-title">
          Enchanting Pets: A Scalable MERN Stack E-Commerce for Pet Services
        </h2>
      </header>

      {/* Poster */}
      <figure>
        <img
          src={PetsPoster}
          alt="Enchanting Pets App Poster"
          id="poster-img"
          loading="lazy"
        />
      </figure>

      {/* Blog Content */}
      <section className="blog-content details-content">
        {/* About */}
        <h3 className="h3">About the Application</h3>
        <p className="blog-text">
          🚀 <strong>Enchanting Pets</strong> is a full-stack eCommerce web
          application crafted for pet lovers and service providers. It allows
          users to book pet grooming, veterinary, and training services online
          with ease. Designed with scalability and clean architecture in mind,
          the app bridges the gap between pet owners and professionals while
          offering a powerful admin dashboard for smooth operations.
        </p>
        <p className="blog-text">
          The project was built with the <strong>MERN Stack</strong> to ensure
          high performance and seamless integration. From secure authentication
          to a modern design system, Enchanting Pets reflects how full-stack
          apps can transform service-based businesses into digital-first
          platforms.
        </p>

        {/* Challenges Faced */}
        <h3 className="h3">Challenges Faced</h3>
        <ul className="problems-list">
          <li>
            <span className="icon-box">
              <MapPin size={18} />
            </span>
            Handling specific service appointments for specific employees with
            availability tracking.
          </li>
          <li>
            <span className="icon-box">
              <CreditCard size={18} />
            </span>
            Integrating Razorpay payment gateway while ensuring transaction
            reliability.
          </li>
          <li>
            <span className="icon-box">
              <Smartphone size={18} />
            </span>
            Building a pixel-perfect, fully responsive UI according to detailed
            Figma designs.
          </li>
          <li>
            <span className="icon-box">
              <Cpu size={18} />
            </span>
            Developing a role-based blog editor that supports dynamic updates
            without breaking flow.
          </li>
          <li>
            <span className="icon-box">
              <Database size={18} />
            </span>
            Maintaining scalable data structures for appointments, services, and
            user profiles.
          </li>
        </ul>

        {/* Solutions Implemented */}
        <h3 className="h3">Solutions Implemented</h3>
        <ul className="solutions-list">
          <li>
            <span className="icon-box">
              <ShieldCheck size={18} />
            </span>
            JWT-based role authentication ensures secure access control for
            Users, Admins, and Employees.
          </li>
          <li>
            <span className="icon-box">
              <CreditCard size={18} />
            </span>
            Razorpay integration for safe, fast, and verified online
            transactions.
          </li>
          <li>
            <span className="icon-box">
              <Cpu size={18} />
            </span>
            A fully functional Admin Panel to manage bookings, blogs, and
            employee assignments efficiently.
          </li>
          <li>
            <span className="icon-box">
              <Smartphone size={18} />
            </span>
            Tailwind CSS + Framer Motion ensures responsiveness, animations, and
            a modern user experience.
          </li>
          <li>
            <span className="icon-box">
              <Monitor size={18} />
            </span>
            Server-side validations and error handling to improve reliability
            across critical workflows.
          </li>
        </ul>

        {/* Front-End Excellence */}
        <h3 className="h3">Front-End Excellence</h3>
        <p className="blog-text">
          The front-end leverages <strong>React.js</strong> and{" "}
          <strong>Tailwind CSS</strong> for a modular and reusable component
          system. <strong>React Router DOM</strong> secures navigation with
          protected routes, while <strong>Framer Motion</strong> adds polished
          micro-interactions and transitions.
        </p>
        <p className="blog-text">
          Accessibility was also prioritized—ensuring text contrasts, ARIA
          labels, and responsive layouts for users on any device, including
          mobile-first audiences. Performance optimization with code-splitting
          and lazy-loading ensures faster load times.
        </p>

        {/* Backend & Database */}
        <h3 className="h3">Robust Backend & Database</h3>
        <p className="blog-text">
          The backend was engineered with <strong>Node.js</strong> and{" "}
          <strong>Express.js</strong> to create scalable REST APIs.{" "}
          <strong>MongoDB</strong> serves as the database for user accounts,
          services, bookings, and blog content.
        </p>
        <p className="blog-text">
          Optimized queries, indexing, and schema validation were introduced to
          handle growing datasets without performance bottlenecks. Razorpay
          transactions are validated at the backend to prevent fraudulent
          payments.
        </p>

        {/* Full-Stack Integration */}
        <h3 className="h3">Full-Stack Integration</h3>
        <ul className="features-list">
          <li>
            🔒 <strong>Authentication:</strong> Role-based JWT for secure
            logins.
          </li>
          <li>
            📦 <strong>Booking Flow:</strong> Select service → Assign employee →
            Checkout.
          </li>
          <li>
            💳 <strong>Payments:</strong> Razorpay integration with backend
            verification.
          </li>
          <li>
            📝 <strong>Blog System:</strong> Dynamic blog editor for admins with
            markdown support.
          </li>
          <li>
            📊 <strong>Admin Panel:</strong> Real-time dashboards for monitoring
            appointments & services.
          </li>
          <li>
            📱 <strong>Responsive UI:</strong> Pixel-perfect and adaptive
            layouts across devices.
          </li>
        </ul>

        {/* Tech Stack */}
        <h3 className="h3">Technology Stack</h3>
        <div className="tech-stack">
          <div className="tech-card">ReactJS</div>
          <div className="tech-card">Tailwind CSS</div>
          <div className="tech-card">React Router DOM</div>
          <div className="tech-card">Context API</div>
          <div className="tech-card">Framer Motion</div>
          <div className="tech-card">Node.js</div>
          <div className="tech-card">Express.js</div>
          <div className="tech-card">MongoDB</div>
          <div className="tech-card">JWT Authentication</div>
          <div className="tech-card">Razorpay Gateway</div>
        </div>

        {/* App Flow */}
        <h3 className="h3">Application Flow</h3>
        <figure>
          <img
            src={PetsFlow}
            alt="Enchanting Pets App Flow"
            id="flow-img"
            loading="lazy"
          />
        </figure>

        {/* Learning Outcomes */}
        <h3 className="h3">Learning Outcomes</h3>
        <p className="blog-text">
          This project helped me refine skills in{" "}
          <strong>
            role-based authentication, Razorpay payment integration, modular UI
            design, and database structuring
          </strong>
          . I also gained deeper insights into handling state management at
          scale and building pixel-perfect designs from Figma to code.
        </p>

        {/* Future Enhancements */}
        <h3 className="h3">Future Enhancements</h3>
        <ul className="problems-list">
          <li>
            📅 Calendar integration for easier employee availability tracking.
          </li>
          <li>⭐ User reviews and ratings for services and employees.</li>
          <li>🔍 Advanced search and filtering for services.</li>
          <li>🔔 Push notifications and email reminders for appointments.</li>
        </ul>

        {/* Conclusion */}
        <h3 className="h3">Conclusion</h3>
        <p className="blog-text">
          Enchanting Pets merges a clean UI, powerful backend, and secure
          payment integration into a single ecosystem. By solving complex
          problems like employee-specific bookings, real-time service
          management, and responsive design, this project demonstrates the
          potential of the MERN stack in delivering real-world service-based
          platforms. It’s more than just a project—it’s a step toward building
          scalable, impactful digital products for the future.
        </p>
      </section>
    </article>
  );
}
