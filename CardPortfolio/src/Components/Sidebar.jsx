// components/Sidebar.jsx
import { useState } from "react";
// Remove react-icons imports if not using, but since user has them, keep for contacts
import {
  IoMailOutline,
  IoPhonePortraitOutline,
  IoCalendarOutline,
  IoLocationOutline,
  IoChevronDown,
} from "react-icons/io5";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Avatar from "../assets/images/portfoliopic.png";
import "../index.css";

export default function Sidebar() {
  const [active, setActive] = useState(false);

  return (
    <aside className={`sidebar ${active ? "active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={Avatar} alt="Pranab Bhowmik" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Pranab Bhowmik">
            Pranab Bhowmik
          </h1>
          <p className="title">Full Stack Developer</p>
        </div>

        <button
          className="info_more-btn"
          onClick={() => setActive(!active)}
          data-sidebar-btn
        >
          <span>{active ? "Hide Contacts" : "Show Contacts"}</span>
          <IoChevronDown />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <IoMailOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a
                href="mailto:bhowmikpranab37@gmail.com"
                className="contact-link"
              >
                bhowmikpranab37@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoPhonePortraitOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+919434442092" className="contact-link">
                +91 94344 42092
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoCalendarOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2002-12-09">Dec 09, 2002</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoLocationOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Purba Medinipur, West Bengal, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FaFacebook />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FaTwitter />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
