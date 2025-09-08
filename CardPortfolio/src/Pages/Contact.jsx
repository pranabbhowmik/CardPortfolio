import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm("service_ibub44c", "template_glq6jph", formRef.current, {
        publicKey: "ObnkQm06WHHN-hv5B",
      })
      .then(() => {
        toast.success("Message sent successfully!", {
          position: "top-center",
          autoClose: 3000,
        });
        setFormData({ fullname: "", email: "", message: "" });
        formRef.current.reset();
      })
      .catch((error) => {
        toast.error("Failed to send message. Please try again.", {
          position: "top-center",
          autoClose: 3000,
        });
        console.error("FAILED...", error.text);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      {/* Map Section */}
      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1107.4466593145657!2d87.85644304713536!3d22.27028127765901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0295a660d63611%3A0x36c9a5214fadd0da!2sSimulia%20Post%20Office!5e0!3m2!1sen!2sin!4v1757314783001!5m2!1sen!2sin"
            width="400"
            height="300"
            loading="lazy"
            title="Google Map"
          ></iframe>
        </figure>
      </section>

      {/* Contact Form */}
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="form" data-form>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              value={formData.fullname}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button
            className="form-btn"
            type="submit"
            disabled={
              isLoading ||
              !formData.fullname ||
              !formData.email ||
              !formData.message
            }
          >
            {isLoading ? <span>Sending...</span> : <span>Send Message</span>}
          </button>
        </form>

        <ToastContainer />
      </section>
    </article>
  );
}
