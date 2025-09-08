import React from "react";
import SwachhBangla from "../assets/images/swachhbangla.jpg";
import Totowala from "../assets/images/totowala-ride.jpg";
import JustCheers from "../assets/images/Just cheers.jpg";
import Enchenting from "../assets/images/enchenting.jpg";
import Lynkloom from "../assets/images/lynkloom.jpg";
// Sample blog data (you can fetch this later from API or CMS)
const blogs = [
  {
    id: 1,
    title: "Swachh Bangla: Smart Garbage Management with Geo-Tracking",
    category: "Smart City",
    date: "2025-01-10",
    displayDate: "Jan 10, 2025",
    description:
      "Swachh Bangla is a next-gen waste management app that uses geo-location and real-time tracking to keep cities clean and efficient. A step forward towards a smarter, greener future.",
    image: SwachhBangla,
    link: "#",
  },
  {
    id: 2,
    title: "Totowala: Redefining Local Rides with E-Rickshaw Booking",
    category: "Mobility",
    date: "2025-02-05",
    displayDate: "Feb 5, 2025",
    description:
      "Totowala makes daily travel simple and sustainable. With an easy-to-use app, users can book e-rickshaws instantly, promoting eco-friendly urban mobility.",
    image: Totowala,
    link: "#",
  },
  {
    id: 3,
    title: "JustCheers: Your Online Alcohol Store with Seamless Payments",
    category: "Ecommerce",
    date: "2025-03-15",
    displayDate: "Mar 15, 2025",
    description:
      "JustCheers is an alcohol e-commerce platform offering a wide range of beverages with secure online payment integration. Bringing convenience and celebration right to your doorstep.",
    image: JustCheers,
    link: "#",
  },
  {
    id: 4,
    title: "Enchanting Pets: A Modern Pet Store Experience",
    category: "Ecommerce",
    date: "2025-04-02",
    displayDate: "Apr 2, 2025",
    description:
      "Enchanting Pets combines love for animals with technology, offering an online store where pet owners can shop for quality products and essentials for their furry companions.",
    image: Enchenting,
    link: "#",
  },
  {
    id: 5,
    title: "Lynkloom: The Future of Networking with NFC Smart Cards",
    category: "Innovation",
    date: "2025-05-20",
    displayDate: "May 20, 2025",
    description:
      "Lynkloom is revolutionizing professional networking with NFC-enabled smart business cards. Share your dynamic profile instantly and make lasting connections.",
    image: Lynkloom,
    link: "#",
  },
];

export default function Blog() {
  return (
    <article className="blog active" data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {blogs.map((blog) => (
            <li className="blog-post-item" key={blog.id}>
              <a href={blog.link}>
                <figure className="blog-banner-box">
                  <img src={blog.image} alt={blog.title} loading="lazy" />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{blog.category}</p>
                    <span className="dot"></span>
                    <time dateTime={blog.date}>{blog.displayDate}</time>
                  </div>

                  <h3 className="h3 blog-item-title">{blog.title}</h3>
                  <p className="blog-text">{blog.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
