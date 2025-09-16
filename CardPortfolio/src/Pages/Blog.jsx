import React from "react";
import SwachhBangla from "../assets/images/swachhbangla.jpg";
import Totowala from "../assets/images/totowala-ride.jpg";
import JustCheers from "../assets/images/Just cheers.jpg";
import Enchenting from "../assets/images/enchenting.jpg";
import Lynkloom from "../assets/images/lynkloom.jpg";
import ReactErrorImage from "../assets/images/react1.png";
import BlogSeo from "../Components/Seo/BlogSeo";
import { Link } from "react-router-dom";
const blogs = [
  {
    id: 1,
    title: "Swachh Bangla: Smart Garbage Management with Geo-Tracking",
    category: "Smart City",
    date: "2025-05-10",
    displayDate: "May 10, 2025",
    description:
      "Swachh Bangla is a next-gen waste management app that uses geo-location and real-time tracking to keep cities clean and efficient. A step forward towards a smarter, greener future.",
    image: SwachhBangla,
    link: "/blog/swachh-bangla",
  },
  {
    id: 2,
    title: "Enchanting Pets: A Modern Pet Store Experience",
    category: "Ecommerce",
    date: "2025-02-20",
    displayDate: "Feb 20, 2025",
    description:
      "Enchanting Pets combines love for animals with technology, offering an online store where pet owners can shop for quality products and essentials for their furry companions.",
    image: Enchenting,
    link: "/blog/enchanting-pets",
  },
  {
    id: 3,
    title: "React App: Fixing Page Not Found on Refresh After Deployment",
    category: "Development",
    date: "2025-02-12",
    displayDate: "Feb 12, 2025",
    description:
      "Deployed React apps show Page Not Found on refresh because servers can't find the route. This guide explains the client-side routing issue and provides server-side fixes....",
    image: ReactErrorImage,
    link: "/blog/react-refresh-error",
  },

  {
    id: 4,
    title: "JustCheers: Your Online Alcohol Store with Seamless Payments",
    category: "Ecommerce",
    date: "2024-08-15",
    displayDate: "Aug 15, 2024",
    description:
      "JustCheers is an alcohol e-commerce platform offering a wide range of beverages with secure online payment integration. Bringing convenience and celebration right to your doorstep...",
    image: JustCheers,
    link: "/blog/just-cheers",
  },
  {
    id: 5,
    title: "Totowala: Redefining Local Rides with E-Rickshaw Booking",
    category: "Mobility",
    date: "2024-06-05",
    displayDate: "Jun 5, 2024",
    description:
      "Totowala makes daily travel simple and sustainable. With an easy-to-use app, users can book e-rickshaws instantly, promoting eco-friendly urban mobility.",
    image: Totowala,
    link: "/blog/totowala",
  },
  {
    id: 6,
    title: "Lynkloom: The Future of Networking with NFC Smart Cards",
    category: "Innovation",
    date: "2024-11-20",
    displayDate: "Nov 20, 2024",
    description:
      "Lynkloom is revolutionizing professional networking with NFC-enabled smart business cards. Share your dynamic profile instantly and make lasting connections.",
    image: Lynkloom,
    link: "/blog/lynkloom",
  },
];

export default function Blog() {
  return (
    <>
      <BlogSeo />
      <article className="blog active" data-page="blog">
        <header>
          <h2 className="h2 article-title">Blog</h2>
        </header>

        <section className="blog-posts">
          <ul className="blog-posts-list">
            {blogs.map((blog) => (
              <li className="blog-post-item" key={blog.id}>
                <Link to={blog.link}>
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
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
}
