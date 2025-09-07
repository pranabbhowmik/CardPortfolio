import React from "react";
import gourav from "../assets/images/avatar-1.png";
import yuvrajj from "../assets/images/avatar-5.png";
import samim from "../assets/images/my-avatar.png";
import komal from "../assets/images/avatar-2.png";
const testimonials = [
  {
    avatar: gourav,
    alt: "Gourav Nigam",
    name: "Gourav Nigam",
    text: "Working with you was an amazing experience! The frontend you built was modern, responsive, and perfectly matched our vision.",
  },
  {
    avatar: yuvrajj,
    alt: "Yuvraaj Singh Dodiya",
    name: "Yuvraaj Singh Dodiya",
    text: "You developed a backend for our project that was both secure and scalable. Really impressed with your knowledge of Node.js and MongoDB.",
  },
  {
    avatar: samim,
    alt: "Samim Sk",
    name: "Samim Sk",
    text: "Your full-stack expertise made our application smooth and user-friendly. From authentication to payments, everything works flawlessly.",
  },
  {
    avatar: komal,
    alt: "Komal Mahato",
    name: "Komal Mahato",
    text: "The UI you designed with React and Tailwind CSS is clean and professional. Clients loved the user experience, thank you!",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h3 className="h3 testimonials-title">Testimonials</h3>

      <ul className="testimonials-list has-scrollbar">
        {testimonials.map((item, index) => (
          <li className="testimonials-item" key={index}>
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src={item.avatar}
                  alt={item.alt}
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                {item.name}
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>{item.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
