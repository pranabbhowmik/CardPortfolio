import React from "react";
import { AlertCircle, CheckCircle2, Globe, Hash, Server } from "lucide-react";
import NetlifyImg from "../../assets/images/netlify.png";
import VercelImg from "../../assets/images/versel.png";
import HttpsImg from "../../assets/images/cpanel.png";
import Poster from "../../assets/images/react1.png";

export default function BlogDetailsReactRouting() {
  return (
    <article className="blog-details active">
      {/* Header */}
      <header>
        <h2 className="h2 blog article-title">
          Why React App Shows "Page Not Found" on Refresh After Deployment (and
          How to Fix It)
        </h2>
      </header>

      {/* Poster */}
      <figure>
        <img
          src={Poster}
          alt="React Routing Issue"
          id="poster-img"
          loading="lazy"
        />
      </figure>

      {/* Blog Content */}
      <section className="blog-content details-content">
        {/* About */}
        <h3 className="h3">The Issue</h3>
        <p className="blog-text">
          If you’ve ever deployed a React application, you might have noticed
          something strange: everything works fine when you navigate inside the
          app, but the moment you <strong>refresh the page</strong> on a nested
          route like <code>/about</code> or <code>/contact</code>, you’re
          greeted with a <strong>404 Page Not Found</strong>. This happens
          because React apps use <em>client-side routing</em>, while most
          servers expect
          <em>server-side routes</em>.
        </p>

        {/* Why It Happens */}
        <h3 className="h3">Why Does This Happen?</h3>
        <ul className="problems-list">
          <li>
            <span className="icon-box">
              <AlertCircle size={18} />
            </span>
            The browser directly requests <code>/about</code> from the server.
          </li>
          <li>
            <span className="icon-box">
              <Server size={18} />
            </span>
            The server doesn’t have that route → returns 404.
          </li>
          <li>
            <span className="icon-box">
              <Globe size={18} />
            </span>
            React Router can’t load because <code>index.html</code> was never
            served.
          </li>
        </ul>

        {/* Solutions */}
        <h3 className="h3">How to Fix It</h3>
        <ul className="solutions-list">
          <li>
            <span className="icon-box">
              <CheckCircle2 size={18} />
            </span>
            Configure your <strong>server to redirect all routes</strong> to{" "}
            <code>index.html</code>.
          </li>
          <li>
            <span className="icon-box">
              <Hash size={18} />
            </span>
            Alternatively, use <strong>HashRouter</strong> if server config
            isn’t possible (URLs will look like <code>site.com/#/about</code>).
          </li>
        </ul>

        {/* Netlify Solution */}
        <h3 className="h3">Deploying on Netlify</h3>
        <p className="blog-text">
          On Netlify, create a <code>_redirects</code> file in your{" "}
          <code>public/</code> folder with the following rule:
        </p>
        <br />
        <figure>
          <img src={NetlifyImg} alt="Netlify Deployment Fix" loading="lazy" />
        </figure>

        {/* Vercel Solution */}
        <h3 className="h3">Deploying on Vercel</h3>
        <p className="blog-text">
          For Vercel, add a <code>vercel.json</code> file with rewrite rules:
        </p>
        <br />
        <figure>
          <img
            src={VercelImg}
            alt="React Routing Issue"
            id="poster-img"
            loading="lazy"
          />
        </figure>

        {/* Other Servers */}
        <h3 className="h3">Other Server Configurations</h3>
        <p className="blog-text">
          If you are using Apache or Nginx, you can configure rewrite rules
          manually:
        </p>
        <br />
        <figure>
          <img
            src={HttpsImg}
            alt="React Routing Issue"
            id="poster-img"
            loading="lazy"
          />
        </figure>

        {/* Conclusion */}
        <h3 className="h3">Conclusion</h3>
        <p className="blog-text">
          The “Page Not Found on Refresh” problem is not a bug in React—it’s a{" "}
          <strong>server configuration issue</strong>. By setting proper
          redirects or using HashRouter, you can make your React apps behave
          reliably across refreshes and direct links. For production-ready apps,
          always configure your server to serve <code>index.html</code> for
          unknown routes.
        </p>
      </section>
    </article>
  );
}
