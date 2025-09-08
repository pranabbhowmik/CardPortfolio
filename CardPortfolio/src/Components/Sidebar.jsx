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
import { SiCodechef } from "react-icons/si";
import {
  FaInstagram,
  FaHackerrank,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Avatar from "../assets/images/portfolioavatar.png";
import "../index.css";

export default function Sidebar() {
  const [active, setActive] = useState(false);

  return (
    <aside className={`sidebar ${active ? "active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={Avatar} alt="Pranab Bhowmik" width="80" id="avatar" />
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
              href="https://www.linkedin.com/in/pranab-bhowmik-58812a231/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://github.com/pranabbhowmik"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FaGithub />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://x.com/PranabB17867819"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FaXTwitter />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.hackerrank.com/profile/cse_tukai"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FaHackerrank />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.instagram.com/pranab_bhowmik_/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FaInstagram />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.codechef.com/users/pranab17"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <SiCodechef />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
