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
    title: "Design conferences in 2022",
    category: "Design",
    date: "2022-02-23",
    displayDate: "Feb 23, 2022",
    description:
      "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
    image: SwachhBangla,
    link: "#",
  },
  {
    id: 2,
    title: "Best fonts every designer",
    category: "Design",
    date: "2022-02-23",
    displayDate: "Feb 23, 2022",
    description:
      "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.",
    image: Totowala,
    link: "#",
  },
  {
    id: 3,
    title: "Design digest #80",
    category: "Design",
    date: "2022-02-23",
    displayDate: "Feb 23, 2022",
    description:
      "Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.",
    image: JustCheers,
    link: "#",
  },
  {
    id: 4,
    title: "UI interactions of the week",
    category: "Design",
    date: "2022-02-23",
    displayDate: "Feb 23, 2022",
    description:
      "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.",
    image: Enchenting,
    link: "#",
  },
  {
    id: 5,
    title: "UI interactions of the week",
    category: "Design",
    date: "2022-02-23",
    displayDate: "Feb 23, 2022",
    description:
      "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.",
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
