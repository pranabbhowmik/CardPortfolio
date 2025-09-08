import React from "react";
import gourav from "../assets/images/avatar-1.png";
import yuvrajj from "../assets/images/avatar-5.png";
import samim from "../assets/images/my-avatar.png";
import komal from "../assets/images/avatar-2.png";
const testimonials = [
  {
    avatar: gourav,
    alt: "Gourav Nikam",
    name: "Gourav Nikam",
    text: "As Pranab’s manager, I’ve seen his growth as a Full-Stack Developer in our company. His ability to handle both frontend and backend with precision has been a huge asset to our projects.",
  },
  {
    avatar: yuvrajj,
    alt: "Yubraj Singh",
    name: "Yubraj Singh",
    text: "Pranab integrated APIs seamlessly with the React frontend of our project, using Redux for smooth state management. His technical skills and timely delivery made the collaboration effortless.",
  },
  {
    avatar: samim,
    alt: "Sk Samim",
    name: "Sk Samim",
    text: "Working with my friend Pranab is always fun and his coding skills make even the toughest tasks look easy.",
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
