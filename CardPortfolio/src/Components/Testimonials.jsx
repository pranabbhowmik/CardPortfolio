import React, { useState, useEffect } from "react";
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
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(!!selectedTestimonial);
  }, [selectedTestimonial]);

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  const closeModal = () => {
    setSelectedTestimonial(null);
  };

  return (
    <section className="testimonials">
      <h3 className="h3 testimonials-title">Testimonials</h3>

      <div className="testimonials-container">
        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((item, index) => (
            <li className="testimonials-item" key={index}>
              <div
                className="content-card"
                data-testimonials-item
                onClick={() => openModal(item)}
                style={{ cursor: "pointer" }}
              >
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
      </div>

      {selectedTestimonial && (
        <>
          <div
            className={`overlay ${isModalOpen ? "active" : ""}`}
            onClick={closeModal}
          />
          <div className={`modal-container ${isModalOpen ? "active" : ""}`}>
            <div className="testimonials-modal">
              <button
                className="modal-close-btn"
                onClick={closeModal}
                data-modal-close-btn
                style={{ fontSize: "20px" }}
              >
                ✕
              </button>
              <figure className="modal-avatar-box">
                <img
                  src={selectedTestimonial.avatar}
                  alt={selectedTestimonial.alt}
                  width="80"
                />
              </figure>
              <h4 className="h4 modal-title">{selectedTestimonial.name}</h4>
              <div className="modal-content">
                <p>{selectedTestimonial.text}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
